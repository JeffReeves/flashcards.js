// 3rd party dependencies: mui-0.9.22, jQuery v3.2.1, jQuery-autoComplete-1.0.7
// local dependencies: functions.js
'use strict';

// UPDATES NEEDED:
// - rewrite all classes to ensure readability and ease of extensibility
// - refactor all logic for UI class when all classes have been updated 
// - update modal to create user if the input user does not exist

/*==[ OBJECTS ]==============================================================*/

//--[ USER ]-------------------------------------------------------------------

var User = (function(){

    function User(username){
        this.id = 0;
        this.username = username || 'anonymous';
        this.stacks = [];
    }

    return User;
}());


//--[ STACK ]------------------------------------------------------------------

var Stack = (function(){
    
    function Stack(obj){
        this.userId = obj.userid;
        this.id = obj.id;
        this.name = obj.name;
        this.decks = [];
    }

    return Stack;
}());


//--[ DECK ]-------------------------------------------------------------------

var Deck = (function(){
    
    function Deck(obj){
        this.stackId = obj.stackid;
        this.id = obj.id;
        this.title = obj.title;
        this.cards = [];
    }

    return Deck;
}());


//--[ CARD ]-------------------------------------------------------------------

var Card = (function(){

    function Card(obj){
        this.deckId = obj.deckid;
        this.id = obj.id;
        this.front = obj.front;
        this.back = obj.back;
        this.status = obj.status;
    }

    return Card;
}());


//--[ DATA ]-------------------------------------------------------------------

var Data = (function(){

    function Data(){
        this.api = {};
        this.user = {};
        this.current = {};

        this.setApiUrl();
    }

    Data.prototype.setApiUrl = function(production, development){

        // declare defaults if no arguments passed
        var production = production || {};
        var development = development || {};

        // production
        this.api.production = {};
        this.api.production.domain = production.domain || 'https://alchemist.digital';
        this.api.production.path = production.path || '/flashcards/api/';
        this.api.production.url = this.api.production.domain + this.api.production.path;

        // development
        this.api.development = {};
        this.api.development.domain = development.domain || 'http://flashcards';
        this.api.development.path = development.path || '/test-api/';
        this.api.development.url = this.api.development.domain + this.api.development.path;

        // active
        this.api.active = {};
        
        // set active URL based on window location
        if(window.location.origin.indexOf(this.api.development.domain) === -1){
            this.api.active.url = this.api.production.url;
        }
        else {
            this.api.active.url = this.api.development.url;
        }

        // active API sub-paths
        this.api.active.exists = this.api.active.url + 'userexists/';
        this.api.active.user = this.api.active.url + 'user/';
        this.api.active.stacks = this.api.active.url + 'stacks/userid/';
        this.api.active.decks = this.api.active.url + 'decks/stackid/';
        this.api.active.cards = this.api.active.url + 'cards/deckid/';
    }

    Data.prototype.doesUserExist = function(username){
        return fn.getJSON(this.api.active.exists + username)
        .then(function(data){
            if(data.userexists === 1){
                return true;
            }
            else {
                return false;
            }
        }, function(error){
            return error;
        });
    }

    Data.prototype.getUserId = function(username){
        return fn.getJSON(this.api.active.user + username)
        .then(function(user){
            return user;
        }, function(error){
            return error;
        });
    }

    Data.prototype.getStacks = function(user){
        return fn.getJSON(this.api.active.stacks + user.id)
        .then(function(stacks){
            return stacks;
        }, function(error){
            return error;
        });
    }

    Data.prototype.getDecks = function(stack){
        return fn.getJSON(this.api.active.decks + stack.id)
        .then(function(decks){
            return decks;
        }, function(error){
            return error;
        });
    }

    Data.prototype.getCards = function(deck){
        return fn.getJSON(this.api.active.cards + deck.id)
        .then(function(cards){
            return cards;
        }, function(error){
            return error;
        });
    }

    Data.prototype.getAllCards = function(username){
        return this.getUserId(username)
        .then(function(user){
            // assign the user id
            this.user.id = user.id;
            return this.user;
        }.bind(this))
        .then(function(user){
            // get the stacks for this user
            return this.getStacks(user);
        }.bind(this))
        .then(function(stacks){
            var deckPromises = [];
            // for each result in the stacks array
            for(var i = 0; i < stacks.length; i++){
                var stack = stacks[i];
                // push it into the user's stacks
                this.user.stacks.push(new Stack(stack));
                // and build an array of promises to get the decks of each stack
                deckPromises.push(this.getDecks(stack))
            }
            return Promise.all(deckPromises);
        }.bind(this))
        .then(function(stacks){
            var cardPromises = [];
            for(var i = 0; i < stacks.length; i++){
                var stack = stacks[i]
                for(var j = 0; j < stack.length; j++){
                    var deck = stack[j];

                    this.user.stacks[i].decks.push(new Deck(deck));

                    cardPromises.push(this.getCards(deck));
                }
            }

            return Promise.all(cardPromises);
        }.bind(this))
        .then(function(decks){
            var abort = false;
            for(var k = 0; k < decks.length; k++){
                var cards = decks[k];
                var deckId = cards[0].deckid;

                for(var i = 0; i < this.user.stacks.length; i++){
                    for(var j = 0; j < this.user.stacks[i].decks.length; j++){
                        // if the deck id matches 
                        if(this.user.stacks[i].decks[j].id === deckId){
                            for(var l = 0; l < cards.length; l++){
                                var card = cards[l];
                                this.user.stacks[i].decks[j].cards.push(new Card(card));
                            }
                            break;
                        }
                    }
                }
            }

            console.log('[DEBUG] Got all cards for user', this.user);
            return true;
        }.bind(this));
    }

    // clones the stacks to the current property
    Data.prototype.setCurrent = function(deckId){
        for(var i = 0; i < this.user.stacks.length; i++){
            for(var j = 0; j < this.user.stacks[i].decks.length; j++){
                if(this.user.stacks[i].decks[j].id === deckId){
                    this.current.stack = JSON.parse(JSON.stringify(this.user.stacks[i]));
                    this.current.deck = JSON.parse(JSON.stringify(this.user.stacks[i].decks[j]));
                    this.current.cards = JSON.parse(JSON.stringify(this.user.stacks[i].decks[j].cards));
                    this.current.cards.total = this.current.deck.cards.length;
                    this.current.cards.correct = 0;
                    this.current.cards.incorrect = 0;
                    this.current.cards.skipped = 0;
                    delete this.current.stack.decks;
                    delete this.current.deck.cards;
                    return;
                }
            }
        }
    }

    return Data;
}());

//--[ MODAL ]------------------------------------------------------------------

var Modal = (function(){

    var _options = {
        'keyboard': true, 
        'static': false, 
        'onclose': function(){} 
    };
    
    function Modal(UI){
        this.username = '';
        this.password = '';
        this.elements = {};
        this.UI = {};
        this.dataInstance = {};
        
        this.setInstance(UI);
        this.getElements();
        this.setEventListeners();
    }

    Modal.prototype.setInstance = function(UI){
        if(UI){
            this.UI = UI;
            this.dataInstance = UI.dataInstance;
        }
    }

    Modal.prototype.getElements = function(){

        // hardcoded values for now 
        this.elements.modal = document.getElementById('login-modal');
        this.elements.button = {};
        this.elements.button.login = document.getElementById('login-button');
        this.elements.input = {};
        this.elements.input.username = document.getElementById('login-username');
        this.elements.input.password = document.getElementById('login-password');
    }

    Modal.prototype.setEventListeners = function(){

        // click login button
        this.elements.button.login.addEventListener('click', function(e){
            
            event.preventDefault();

            // get the username and password
            var username = this.elements.input.username.value;
            var password = this.elements.input.password.value;

            if(username){
                // check if user exists 
                this.dataInstance.doesUserExist(username)
                .then(function(exists){
                    
                    // if the user exists
                    if(exists === true){
                        // instantiate a new user from the username entered
                        this.dataInstance.user = new User(username);

                        // get the user's cards
                        this.dataInstance.getAllCards(username)
                        .then(function(){
                            // close the modal
                            this.close();
                            this.UI.login();
                        }.bind(this));
                    }
                    else {
                        console.log('[DEBUG] User does not exist. Need to create user.');
                    }
                }.bind(this));
            }
        }.bind(this));
    }

    Modal.prototype.open = function(){
        mui.overlay('on', _options, this.elements.modal);
    }

    Modal.prototype.close = function(){
        mui.overlay('off');
    }
    
    return Modal;
}());


//--[ UI ]---------------------------------------------------------------------

var UI = (function(){
    
    function UI(dataInstance){

        this.elements = {};
        this.dataInstance = {};

        this.setData(dataInstance);
        this.getElements();
        this.elements.modal.open();
    }

    UI.prototype.setData = function(dataInstance){
        if(dataInstance){
            this.dataInstance = dataInstance;
        }
    }

    UI.prototype.getElements = function(){
        
        // hardcoded values for now 
        //--[ modal ]------------------------------------------------------

        this.elements.modal = new Modal(this);

        //--[ shared ]-----------------------------------------------------

        this.elements.header = {

            menu: {

                container: document.getElementById('dropdown-menu'),

                option: {
                    login: document.getElementById('menu-login'),
                    viewer: document.getElementById('menu-viewer'),
                    editor: document.getElementById('menu-editor'),
                    logout: document.getElementById('menu-logout')
                }
            }
        };

        //--[ viewer ]-----------------------------------------------------

        this.elements.viewer = {

            view: document.getElementById('viewer'),

            dropdown: {
                select: document.getElementById('card-deck-select'),
                label: document.getElementById('stack-label'),
            },

            progressbar: {
                container: document.getElementById('progress-bar'),
                correct: document.getElementById('correct-progress'),
                incorrect: document.getElementById('incorrect-progress'),
                skipped: document.getElementById('skipped-progress'),
            },

            flashcard: {
                container: document.getElementById('flashcard-container'),
                card: document.getElementById('flashcard'),
                front: document.getElementById('front'),
                back: document.getElementById('back'),
                text: {
                    front: document.getElementById('front-text'),
                    back: document.getElementById('back-text')
                }
            },

            button: {
                correct: document.getElementById('correct-button'),
                incorrect: document.getElementById('incorrect-button'),
                skip: document.getElementById('skip-button'),
            }
        };

        //--[ editor view ]------------------------------------------------

        this.elements.editor = {

            view: document.getElementById('editor-view'),
            decks: {},
            cards: {}

        };

        //--[ show deck view ]---------------------------------------------

        this.elements.editor.decks.show = {

            view: document.getElementById('show-decks'),

            dropdown: {
                select: document.getElementById('editor-deck-select')
            },

            input: {
                card: document.getElementById('editor-card-input')
            },

            button: {
                edit: {
                    deck: document.getElementById('editor-deck-edit-button'),
                    card: document.getElementById('editor-card-edit-button')
                },
                
                add: {
                    deck: document.getElementById('editor-deck-add-button'),
                    card: document.getElementById('editor-card-add-button')
                },

                selectAll: document.getElementById('editor-card-select-all'),
            }
        };

        //--[ edit deck view ]---------------------------------------------


        this.elements.editor.decks.edit = {

            view: document.getElementById('edit-deck'),

            form: document.getElementById('edit-deck-form'),

            input: {
                stack: document.getElementById('edit-deck-stack'),
                title: document.getElementById('edit-deck-title')
            },

            button: {
                save: document.getElementById('edit-deck-save-button'),
                cancel: document.getElementById('edit-deck-cancel-button'),
                delete: document.getElementById('edit-deck-delete-button')
            }
        }; 

        //--[ add deck view ]----------------------------------------------

        this.elements.editor.decks.add = {

            view: document.getElementById('add-deck'),
            
            form: document.getElementById('add-deck-form'),

            input: {
                stack: document.getElementById('new-deck-stack'),
                title: document.getElementById('new-deck-title')
            },   

            button: {
                save: document.getElementById('add-deck-save-button'),
                cancel: document.getElementById('add-deck-cancel-button')
            }
        }; 
    
        //--[ edit card view ]---------------------------------------------

        this.elements.editor.cards.edit = {
            
            view: document.getElementById('edit-card'),
            
            form: document.getElementById('edit-card-form'),

            input: {
                front: document.getElementById('edit-card-front'),
                back: document.getElementById('edit-card-back')
            },

            button: {
                save: document.getElementById('edit-card-save-button'),
                cancel: document.getElementById('edit-card-cancel-button'),
                delete: document.getElementById('edit-card-delete-button')
            }
        }; 
        
        //--[ add card view ]----------------------------------------------

        this.elements.editor.cards.add = {
            view: document.getElementById('add-card'),
            
            form: document.getElementById('add-card-form'),

            input: {
                front: document.getElementById('new-card-front'),
                back: document.getElementById('new-card-back')
            },    

            button: {
                save: document.getElementById('add-card-save-button'),
                cancel: document.getElementById('add-card-cancel-button')
            }
        };
    }

    // occurs after a user has logged in
    UI.prototype.login = function(){

        console.log('[DEBUG] UI.login');
        
        // hide the login menu item
        fn.addClass(this.elements.header.menu.option.login, 'disabled');

        // show the editor view and logout menu items
        fn.removeClass(this.elements.header.menu.option.editor, 'disabled');
        fn.removeClass(this.elements.header.menu.option.logout, 'disabled');

        // initialize the deck selection dropdown and event handlers 
        this.setupDeckSelection();

        // add items to the editor view
        //this.setupEditor();
    }

    UI.prototype.updateStackLabel = function(deckId){

        console.log('[DEBUG] UI.updateStackLabel');

        this.elements.viewer.dropdown.label.innerHTML = this.dataInstance.current.stack.name;

        // replaced by above line
        // var select = this.elements.viewer.dropdown.select;
        // var options = select.getElementsByTagName('option');
        // // iterate over all options
        // for(var i = 0; i < options.length; i++){
        //     var option = options[i];
        //     var value = Number(option.value);
        //     // if the option value matches the deckId selected
        //     if(deckId === value){
        //         // set the dropdown's label to the stack's name
        //         var optgroup = option.parentElement.label;
        //         this.elements.viewer.dropdown.label.innerHTML = optgroup;
        //         break;
        //     }
        // }
    }

    UI.prototype.setViewerDeck = function(){

        console.log('[DEBUG] UI.setViewDeck');

        // get the active deck's ID
        var deckId = Number(this.elements.viewer.dropdown.select.value);

        // set the current stack and deck
        this.dataInstance.setCurrent(deckId);

        // update stack label 
        this.updateStackLabel(deckId);

        // reset progress bar
        this.resetProgress();  
    }

    UI.prototype.setupDeckSelection = function(){

        console.log('[DEBUG] UI.setupDeckSelection');
        
        // add the options to the drop-down
        this.addOptions();

        // set a default deck for the card view
        this.setViewerDeck();

        // set the default deck for editor view
        //this.selectEditorDeck();

        // create an onchange event to switch selected card view deck
        this.elements.viewer.dropdown.select.addEventListener('change', function(){

            console.log('[DEBUG] viewer.dropdown.select clicked');
            this.setViewerDeck();

        }.bind(this));
    }

    UI.prototype.addOptions = function(){

        console.log('[DEBUG] UI.addOptions');

        // remove existing dropdown elements
        this.elements.viewer.dropdown.select.innerHTML = '';

        // stacks
        var stacks = this.dataInstance.user.stacks;
        for(var i = 0; i < stacks.length; i++){

            // add option group for stacks
            var optionGroup = document.createElement('optgroup');
            optionGroup.label = stacks[i].name;

            for(var j = 0; j < stacks[i].decks.length; j++){

                // add option for each deck
                var option = document.createElement('option');
                option.setAttribute('value', stacks[i].decks[j].id);
                option.text = stacks[i].decks[j].title;

                // append it to the select dropdown
                optionGroup.appendChild(option);
            }

            // append it to the card view select dropdown
            this.elements.viewer.dropdown.select.appendChild(optionGroup);
        }

        // // editor deck select options
        // this.elements.editorDeckSelect.innerHTML = '';

        // for(var i = 0; i < options.length; i++){
            
        //     // add option group for deck groups
        //     var optionGroup = document.createElement('optgroup');
        //     optionGroup.label = options[i].stack;

        //     for(var j = 0; j < options[i].decks.length; j++){

        //         // add option for each deck
        //         var option = document.createElement('option');
        //         option.setAttribute('value', options[i].decks[j].id);
        //         option.text = options[i].decks[j].title;

        //         // append it to the select dropdown
        //         optionGroup.appendChild(option);
        //     }

        //     // append it to the card view select dropdown
        //     this.elements.editorDeckSelect.appendChild(optionGroup);
        // }       
    }

    UI.prototype.resetProgress = function(){

        console.log('[DEBUG] UI.resetProgress');

        // reset the width to 0
        this.elements.viewer.progressbar.correct.style.width = '0%';
        this.elements.viewer.progressbar.incorrect.style.width = '0%';
        this.elements.viewer.progressbar.skipped.style.width = '0%';

        // reset the current values to 0
        this.dataInstance.current.cards.correct = 0;
        this.dataInstance.current.cards.incorrect = 0;
        this.dataInstance.current.cards.skipped = 0;
    }

    UI.prototype.enableCardButtons = function(){

        this.elements.viewer.button.correct.addEventListener('click', function(){
            this.getButtonValue(this);
        }.bind(this));

        this.elements.viewer.button.incorrect.addEventListener('click', function(){
            this.getButtonValue(this);
        }.bind(this));

        this.elements.viewer.button.skip.addEventListener('click', function(){
            this.getButtonValue(this);
        }.bind(this));
    }

    UI.prototype.getButtonValue = function(self){

            console.log('self in getButtonValue', self);
    
            if(self.dataInstance.card.status !== undefined){
    
                // update progress
                self.updateProgress(buttonId);
    
                if(buttonId === 'incorrect' || buttonId === 'skip'){
    
                    // move card to back of deck
                    self.current.cards.unshift(self.current.card);
                }
    
                self.getNewCard(); 
            }    
            else {
    
                // TODO: ran out of cards, restart the deck
                //self.selectCardViewDeck(self.current.deck.id);
                //self.resetProgress();
            }
        };

    UI.prototype.logOut = function(){
        var self = flashcardsjs;

        // remove user from current end destroy user object
        self.user = undefined;
        
        // remove all current values 
        self.UI.clearCurrent();

        // reset progress
        self.UI.resetProgress();

        // set the front and back of the cards
        self.UI.setFront('Please log in');
        self.UI.setBack('');

        // set the dropdown menu back to empty
        self.UI.elements.cardDeckSelect.innerHTML = '<optgroup label="Deck Group"> ' +
            '<option>Decks Will Appear Here</option>' +
            '</optgroup>';

        // show the login menu item
        fn.removeClass(self.UI.elements.menuLogin, 'disabled');
        
        // hide the card view, editor view, and logout menu items
        fn.addClass(self.UI.elements.menuCardView, 'disabled');
        fn.addClass(self.UI.elements.menuEditView, 'disabled');
        fn.addClass(self.UI.elements.menuLogout, 'disabled');

        // move to card view
        fn.setVisible('router-view', 'disabled', self.UI.elements.cardView.id);

        // re-open the login modal
        self.UI.elements.modal.open();
    }

    UI.prototype.setInputDirty = function(elements){

        // untouched classes "mui--is-empty mui--is-untouched mui--is-pristine"
        // touched classes "mui--is-touched mui--is-dirty mui--is-not-empty"

        for(var i = elements.length; i--;){
            fn.removeClass(elements[i], 'mui--is-empty');
            fn.removeClass(elements[i], 'mui--is-untouched');
            fn.removeClass(elements[i], 'mui--is-pristine');

            fn.addClass(elements[i], 'mui--is-touched');
            fn.addClass(elements[i], 'mui--is-dirty');
            fn.addClass(elements[i], 'mui--is-not-empty');
        }
    }

    UI.prototype.flipCard = function(){
        var self = flashcardsjs.UI;
        fn.addClass(self.elements.flashcard, 'flipped');
    }

    UI.prototype.flipCardBack = function(){
        var self = flashcardsjs.UI;
        fn.removeClass(self.elements.flashcard, 'flipped');
    }

    // enables and disables card flipping
    UI.prototype.enableEventListeners = function(){
        
        // mouse enter and leave events to flip card
        this.elements.flashcardContainer.addEventListener('mouseenter', this.flipCard);
        this.elements.flashcardContainer.addEventListener('mouseleave', this.flipCardBack);

        // helps mobile users since they can't enter or leave with a mouse
        this.elements.front.addEventListener('click', this.flipCard);
        this.elements.back.addEventListener('click', this.flipCardBack);

        // ROUTES
        this.elements.menuCardView.addEventListener('click', function(){
            fn.setVisible('router-view', 'disabled', this.elements.cardView.id);
            fn.setVisible('router-menu', 'disabled', this.elements.menuEditView.id);
        }.bind(this));

        this.elements.menuEditView.addEventListener('click', function(){
            fn.setVisible('router-view', 'disabled', this.elements.editorView.id);
            fn.setVisible('router-menu', 'disabled', this.elements.menuCardView.id);
        }.bind(this));

        // login / logout
        this.elements.menuLogin.addEventListener('click', this.logIn);
        this.elements.menuLogout.addEventListener('click', this.logOut);

        // deck selection dropdown
        this.elements.editorDeckSelect.addEventListener('change', function(){
            var idNumber = Number(this.elements.editorDeckSelect.value);
            this.selectEditorDeck(idNumber);
        }.bind(this));

        // edit deck button
        this.elements.editorDeckEditButton.addEventListener('click', function(){
            var deckSelect = this.elements.editorDeckSelect;
            // get id of deck selected
            var idNumber = deckSelect.value;

            // iterate over optgroups to get the stack/group of the deck
            var optgroups = deckSelect.getElementsByTagName('optgroup');
            for(var i = 0; i < optgroups.length; i++){

                var label = optgroups[i].label;

                var decks = optgroups[i].getElementsByTagName('option');
                for(var j = 0; j < decks.length; j++){

                    var value = decks[j].value;
                    var innerText = decks[j].innerText;
                    if(value === idNumber){

                        this.elements.editDeckStack.value = label;
                        this.elements.editDeckTitle.value = innerText;

                        this.setInputDirty([
                            this.elements.editDeckStack, 
                            this.elements.editDeckTitle]);
                    }
                }
            }
            
            fn.setVisible('router-editor-view', 'disabled', this.elements.editDeck.id);
        }.bind(this));

        // add deck button
        this.elements.editorDeckAddButton.addEventListener('click', function(){

            var deckSelect = this.elements.editorDeckSelect;
            // get id of deck selected
            var idNumber = deckSelect.value;

            // iterate over optgroups to get the stack/group of the deck
            var optgroups = deckSelect.getElementsByTagName('optgroup');
            for(var i = 0; i < optgroups.length; i++){

                var label = optgroups[i].label;

                var decks = optgroups[i].getElementsByTagName('option');
                for(var j = 0; j < decks.length; j++){

                    var value = decks[j].value;
                    var innerText = decks[j].innerText;
                    if(value === idNumber){

                        this.elements.newDeckStack.value = label;
                        // this.elements.editDeckTitle.value = innerText;

                        this.setInputDirty([
                            this.elements.newDeckStack]);
                    }
                }
            }

            fn.setVisible('router-editor-view', 'disabled', this.elements.addDeck.id);
        }.bind(this));

        // find card textarea field
        this.elements.editorCardSelectAll.addEventListener('click', function(){

            // select everything in this field so its easy to type over
            this.elements.editorCardInput.focus();
            this.elements.editorCardInput.select();
        }.bind(this));

        // edit card button
        this.elements.editorCardEditButton.addEventListener('click', function(){

            if(this.elements.editorCardInput.value){

                var cardSearch = this.elements.editorCardInput.value;
                // split into front and back of card
                var split = cardSearch.split('---');
                var front, back;

                // found out which part is the back and which is the front
                for(var i = 0; i < split.length; i++){
                    if(split[i].indexOf('Front') !== -1){
                        front = split[i];
                    }
                    else {
                        back = split[i];
                    }
                }

                // strip out just the front
                var front = front.replace('Front:', '').trim();

                //iterate through all cards held in the editor
                for(var i = 0; i < this.current.editorCards.length; i++){

                    var editorCardFront = this.current.editorCards[i].front;

                    // if a match is found, get its id
                    if(editorCardFront.indexOf(front) !== -1){

                        this.current.editorCard = this.current.editorCards[i];
                        this.elements.editCardFront.value = this.current.editorCard.front;
                        this.elements.editCardBack.value = this.current.editorCard.back;
                        this.setInputDirty([
                            this.elements.editCardFront,
                            this.elements.editCardBack
                        ]);
                    }
                }

                fn.setVisible('router-editor-view', 'disabled', this.elements.editCard.id);
            }
        }.bind(this));

        // add card button
        this.elements.editorCardAddButton.addEventListener('click', function(){
            console.log('clicked add card button');
            fn.setVisible('router-editor-view', 'disabled', this.elements.addCard.id);
        }.bind(this));

        // edit deck's save button
        this.elements.editDeckSaveButton.addEventListener('click', function(){
            
            var self = this;
            
            console.log('editing existing deck...')
            var stack = this.elements.editDeckStack.value;
            var title = this.elements.editDeckTitle.value;
            var username = this.current.username;
            var deckId = this.current.editorDeck.id;

            $.post(apiUrl + '/edit/deck', { 
                stack: stack, 
                title: title,
                username: username,
                deckId: deckId
            }) 
            .done(function(data){
                console.log('Edited existing deck', data);
                console.log('[Existing Deck]');
                console.log('Stack: ', stack);
                console.log('Title: ', title);
                console.log('username: ', username);
                console.log('deckId: ', deckId);
                fn.setVisible('router-editor-view', 'disabled', self.elements.showDecks.id);
            });
        }.bind(this));

        // add deck's save button
        this.elements.addDeckSaveButton.addEventListener('click', function(){
            
            var self = this;
            
            console.log('saving new deck...')
            var stack = this.elements.newDeckStack.value;
            var title = this.elements.newDeckTitle.value;
            var username = this.current.username;

            $.post(apiUrl + '/create/deck', { 
                stack: stack, 
                title: title,
                username: username
            }) 
            .done(function(data){
                console.log('Created new deck', data);
                console.log('[New Deck]');
                console.log('Stack: ', stack);
                console.log('Title: ', title);
                fn.setVisible('router-editor-view', 'disabled', self.elements.showDecks.id);
            });

        }.bind(this));

        // edit cards's save button
        this.elements.editCardSaveButton.addEventListener('click', function(){
            
            var self = this;
            
            console.log('editing card...')
            var username = this.current.username;
            var cardId = this.current.editorCard.id;
            var deckId = this.current.editorDeck.id;
            var front = this.elements.editCardFront.value;
            var back = this.elements.editCardBack.value;

            $.post(apiUrl + '/edit/card', { 
                front: front, 
                back: back,
                cardId: cardId,
                deckId: deckId,
                username: username
            }) 
            .done(function(data){
                console.log('Editing existing card', data);
                console.log('[Existing Card]');
                console.log('Front: ', front);
                console.log('Back: ', back);
                console.log('cardId: ', cardId);
                console.log('deckId', deckId);
                console.log('username: ', username);
                fn.setVisible('router-editor-view', 'disabled', self.elements.showDecks.id);
            });
        }.bind(this));

        // add cards's save button
        this.elements.addCardSaveButton.addEventListener('click', function(){
            
            var self = this;
            
            console.log('saving new card...')
            var username = this.current.username;
            var deckId = this.current.editorDeck.id;
            var front = this.elements.newCardFront.value;
            var back = this.elements.newCardBack.value;
            
            $.post(apiUrl + '/create/card', { 
                front: front, 
                back: back,
                deckId: deckId,
                username: username
            }) 
            .done(function(data){
                console.log('Creating new card', data);
                console.log('[New Card]');
                console.log('Front: ', front);
                console.log('Back: ', back);
                console.log('deckId', deckId);
                console.log('username: ', username);
                fn.setVisible('router-editor-view', 'disabled', self.elements.showDecks.id);
            });
        }.bind(this));

        // edit deck's cancel button
        this.elements.editDeckCancelButton.addEventListener('click', function(){
            fn.setVisible('router-editor-view', 'disabled', this.elements.showDecks.id);
        }.bind(this));

        // add deck's cancel button
        this.elements.addDeckCancelButton.addEventListener('click', function(){
            fn.setVisible('router-editor-view', 'disabled', this.elements.showDecks.id);
        }.bind(this));

        // edit card's cancel button
        this.elements.editCardCancelButton.addEventListener('click', function(){
            fn.setVisible('router-editor-view', 'disabled', this.elements.showDecks.id);
        }.bind(this));

        // add card's cancel button
        this.elements.addCardCancelButton.addEventListener('click', function(){
            fn.setVisible('router-editor-view', 'disabled', this.elements.showDecks.id);
        }.bind(this));

        // add events for button presses
        this.enableCardButtons();
    }

    // updates the progress bar
    UI.prototype.updateProgress = function(button){

        // get current card's status
        var status = this.current.card.status;

        // make changes based on button
        switch(button){

            case 'correct':
                if(status === 'incorrect'){
                    this.current.incorrect--;
                    this.current.correct++;
                    this.current.card.status = 'correct';
                }
                else if(status === 'skipped'){
                    this.current.skipped--;
                    this.current.correct++;
                    this.current.card.status = 'correct';
                }
                else if(status === null){
                    this.current.correct++;
                    this.current.card.status = 'correct';
                }
                break;

            case 'incorrect':
                if(status === 'skipped'){
                    this.current.skipped--;
                    this.current.incorrect++;
                    this.current.card.status = 'incorrect';
                }
                else if(status === 'correct'){
                    this.current.correct--;
                    this.current.incorrect++;
                    this.current.card.status = 'incorrect';
                }
                else if(status === null){
                    this.current.incorrect++;
                    this.current.card.status = 'incorrect';
                }
                break;

            case 'skip':
                if(status === 'incorrect'){
                    this.current.incorrect--;
                    this.current.skipped++;
                    this.current.card.status = 'skipped';
                }
                else if(status === 'correct'){
                    this.current.correct--;
                    this.current.skipped++;
                    this.current.card.status = 'skipped';
                }
                else if(status === null){
                    this.current.skipped++;
                    this.current.card.status = 'skipped';
                }
                break;
        }

        // set the width equal to the percentage of correct/incorrect/skipped 
        this.elements.correctProgress.style.width = 
            (this.current.correct / this.current.totalCards) * 100 + '%';

        this.elements.incorrectProgress.style.width = 
            (this.current.incorrect / this.current.totalCards) * 100 + '%';

        this.elements.skippedProgress.style.width = 
            (this.current.skipped / this.current.totalCards) * 100 + '%';
    };

    UI.prototype.setupFindCardAutoComplete = function(){
        var self = this;
        $('#editor-card-input').autoComplete({
            minChars: 2,
            cache: false,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = flashcardsjs.UI.current.editorDeck.cards;
                var suggestions = [];
                for(var i = 0; i < choices.length; i++){
                    if(choices[i].front.toLowerCase().indexOf(term) !== -1){
                        suggestions.push('Front: ' + choices[i].front + '\n---\nBack: ' + choices[i].back);
                    } 
                    else if(choices[i].back.toLowerCase().indexOf(term) !== -1) {

                        suggestions.push('Back: ' + choices[i].back + '\n---\nFront: ' + choices[i].front);
                    }
                }
                suggest(suggestions);
            }
        });
    }

    UI.prototype.selectEditorDeck = function(deckId){
        // set the editor decks and cards after the user logs in

        if(deckId){
            
            // iterate through all current decks
            for(var i = 0; i < this.current.editorDecks.length; i++){
                
                // if the selected deck matches 
                if(this.current.editorDecks[i].id === deckId){
                    this.current.editorDeck = this.current.editorDecks[i];
                }
            }
        }
        else {
            this.current.editorDeck = this.current.editorDecks[0];
        }

        this.current.editorCards = this.current.editorDeck.cards;
    }

    // set the current deck to the one selected in the dropdown
    // or default to the first one available
    UI.prototype.selectCardViewDeck = function(deckId){

        if(deckId){

            // iterate through all current decks
            for(var i = 0; i < this.current.decks.length; i++){
                
                // if the selected deck matches 
                if(this.current.decks[i].id === deckId){
                    this.current.deck = this.current.decks[i];
                }
            }
        }
        else {
            this.current.deck = this.current.decks[0];
        }

        this.current.cards = this.current.deck.cards;
        // shuffle cards so their order can't be memorized easily
        this.current.cards = fn.shuffleArray(this.current.cards);
        this.current.totalCards = this.current.cards.length;

        // select a new card off the top
        this.getNewCard()
    }

    UI.prototype.setFront = function(text){
        this.elements.frontText.innerText = text;
    }

    UI.prototype.setBack = function(text){
        this.elements.backText.innerText = text;
    }

    UI.prototype.getNewCard = function(){
        
        if(this.current.cards.length > 0){

            // pop a card off of the deck 
            this.current.card = this.current.cards.pop();

            // set the text on the card
            this.setFront(this.current.card.front);

            // set the back to blank and wait 500 ms to set the back text
            // this prevents the user from seeing it ahead of time on card changes
            this.setBack('');

            setTimeout(function(){
                this.setBack(this.current.card.back);
            }.bind(this), 500); // equal to transition time in style.css
        }
        else {
            this.current.card = {};
            this.current.cards = [];
            this.setFront('Congratulations! You\'ve finished the deck!');
            this.setBack('You didn\'t believe me did you? =P');           
        }
    }

    return UI;
}());


/*==[ MAIN ]=================================================================*/

// create a single window object to hold the entire app instance
var flashcardsjs = {};
// create data
flashcardsjs.data = new Data();
// create UI 
flashcardsjs.UI = new UI(flashcardsjs.data);



/*==[ TEST ]=================================================================*/