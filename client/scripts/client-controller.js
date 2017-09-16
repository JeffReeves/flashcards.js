// 3rd party dependencies: mui-0.9.22, jQuery v3.2.1, jQuery-autoComplete-1.0.7
// local dependencies: functions.js
'use strict';

// UPDATES NEEDED:
// - rewrite all classes to ensure readability and ease of extensibility
// - refactor all logic for UI class when all classes have been updated 
// - update modal to create user if the input user does not exist
// - continue to finish all necessary eventlisteners and their handlers for the editor view
// - only try to load current cards if the user has any stacks or decks
// - update autocomplete so that it doesn't choke on double-quoted strings

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
        this.current.editor = {};

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
                    // shuffle the card order
                    this.current.cards = fn.shuffleArray(this.current.cards);
                    this.current.card = {};
                    this.current.total = this.current.deck.cards.length;
                    this.current.correct = 0;
                    this.current.incorrect = 0;
                    this.current.skipped = 0;
                    delete this.current.stack.decks;
                    delete this.current.deck.cards;
                    return;
                }
            }
        }
    }

    // updates the current deck/stack selected for the editor
    Data.prototype.setEditorCurrent = function(deckId){
        for(var i = 0; i < this.user.stacks.length; i++){
            for(var j = 0; j < this.user.stacks[i].decks.length; j++){
                if(this.user.stacks[i].decks[j].id === deckId){
                    this.current.editor.stack = JSON.parse(JSON.stringify(this.user.stacks[i]));
                    this.current.editor.deck = JSON.parse(JSON.stringify(this.user.stacks[i].decks[j]));
                    this.current.editor.cards = JSON.parse(JSON.stringify(this.user.stacks[i].decks[j].cards));
                    delete this.current.editor.stack.decks;
                    delete this.current.editor.deck.cards;
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
        this.handlers = {};
        this.UI = {};
        this.dataInstance = {};
        
        this.setHandlers();
        this.setInstance(UI);
        this.getElements();
    }

    Modal.prototype.setHandlers = function(){
        this.handlers.login = function(){
            this.login();
        }.bind(this);
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

    Modal.prototype.login = function(){

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
    }

    Modal.prototype.open = function(){
        this.elements.button.login.addEventListener('click', this.handlers.login);        
        mui.overlay('on', _options, this.elements.modal);
    }

    Modal.prototype.close = function(){
        this.elements.button.login.removeEventListener('click', this.handlers.login);                
        mui.overlay('off');
    }
    
    return Modal;
}());


//--[ UI ]---------------------------------------------------------------------

var UI = (function(){
    
    function UI(dataInstance){

        this.elements = {};
        this.handlers = {};
        this.dataInstance = {};

        this.setHandlers();
        this.setData(dataInstance);
        this.getElements();
        this.elements.modal.open();
        this.enableLoginLogout();
        this.setupFindCardAutoComplete();
    }

    UI.prototype.setHandlers = function(){

        this.handlers.correct = function(){
            this.getButtonValue('correct');
        }.bind(this);

        this.handlers.incorrect = function(){
            this.getButtonValue('incorrect');
        }.bind(this);

        this.handlers.skipped = function(){
            this.getButtonValue('skipped');
        }.bind(this);

        this.handlers.flip = function(){
            this.flipCard();
        }.bind(this);

        this.handlers.flipBack = function(){
            this.flipCardBack();
        }.bind(this);

        this.handlers.login = function(){
            this.elements.modal.open();
        }.bind(this);

        this.handlers.logout = function(){
            this.logout();
        }.bind(this);

        this.handlers.changeViewToViewer = function(){
            this.changeViewToViewer();
        }.bind(this);

        this.handlers.changeViewToEditor = function(){
            this.changeViewToEditor();
        }.bind(this);

        this.handlers.setViewerDeck = function(){
            this.setViewerDeck();
        }.bind(this);

        this.handlers.setEditorDeck = function(){
            this.setEditorDeck();
        }.bind(this);

        this.handlers.editorEditDeck = function(){
            this.editorEditDeck();
        }.bind(this);

        this.handlers.editorAddDeck = function(){
            this.editorAddDeck();
        }.bind(this);

        this.handlers.editorEditCard = function(){
            this.editorEditCard();
        }.bind(this);

        this.handlers.editorAddCard = function(){
            this.editorAddCard();
        }.bind(this);

        this.handlers.cancelEdit = function(){
            this.cancelEdit();
        }.bind(this);

        this.handlers.editorCardSelectAll = function(){
            this.editorCardSelectAll();
        }.bind(this);
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

            view: document.getElementById('editor'),
            decks: {},
            cards: {}

        };

        //--[ show deck view ]---------------------------------------------
        
        this.elements.editor.decks.show = {

            view: document.getElementById('show-decks'),

            dropdown: {
                select: document.getElementById('editor-deck-select'),
                label: document.getElementById('editor-stack-label')
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

        // enable onchange event for deck selection 
        this.enableDeckSelection();

        // enable card flipping
        this.enableCardFlipping();

        // enable card buttons
        this.enableCardButtons();

        // enable routes 
        this.enableRoutes();

        // enable editor buttons
        this.enableEditorButtons();

        // add items to the editor view
        //this.setupEditor();
    }

    UI.prototype.logout = function(){

        console.log('[DEBUG] UI.logout');
        
        // remove user from current end destroy user object
        this.dataInstance.user = undefined;

        // reset progress
        this.resetProgress();
        
        // remove all current values 
        //this.clearCurrent();

        // set the front and back of the cards
        this.setFront('Please log in');
        this.setBack('');

        // set the dropdown menu back to empty
        this.elements.viewer.dropdown.select.innerHTML = '<optgroup label="Deck Group"> ' +
            '<option>Decks Will Appear Here</option>' +
            '</optgroup>';

        // set the stack name to default 
        this.elements.viewer.dropdown.label.innerHTML = 'No Stacks Found';
        this.elements.editor.decks.show.dropdown.label.innerHTML = 'No Stacks Found';

        // show the login menu item
        fn.removeClass(this.elements.header.menu.option.login, 'disabled');
        
        // hide the card view, editor view, and logout menu items
        fn.addClass(this.elements.header.menu.option.viewer, 'disabled');
        fn.addClass(this.elements.header.menu.option.editor, 'disabled');
        fn.addClass(this.elements.header.menu.option.logout, 'disabled');

        // move to card view
        fn.setVisible('router-view', 'disabled', this.elements.viewer.view.id);

        // removes event listeners for onchange to deck selection
        this.disableDeckSelection();

        // removes event listeners for flipping cards
        this.disableCardFlipping();

        // removes event listeners for route menu options
        this.disableRoutes();

        // disables card buttons 
        this.disableCardButtons();

        // disables event listeners on editor buttons
        this.disableEditorButtons();

        // re-open the login modal
        this.elements.modal.open();
    }

    UI.prototype.updateViewerStackLabel = function(){
        console.log('[DEBUG] UI.updateViewerStackLabel');
        this.elements.viewer.dropdown.label.innerHTML = this.dataInstance.current.stack.name;
    }

    UI.prototype.updateEditorSelectedDeck = function(){
        console.log('[DEBUG] UI.updateEditorSelectedDeck');
        var select = this.elements.editor.decks.show.dropdown.select;
        var deckId = Number(select.value);
        this.dataInstance.setEditorCurrent(deckId);
    }

    UI.prototype.updateEditorStackLabel = function(deckId){
        console.log('[DEBUG] UI.updateEditorStackLabel');
        this.elements.editor.decks.show.dropdown.label.innerHTML = this.dataInstance.current.editor.stack.name;
    }

    UI.prototype.setViewerDeck = function(){

        console.log('[DEBUG] UI.setViewDeck');

        // get the active deck's ID
        var deckId = Number(this.elements.viewer.dropdown.select.value);

        // set the current stack and deck
        this.dataInstance.setCurrent(deckId);

        // update stack label 
        this.updateViewerStackLabel();

        // reset progress bar
        this.resetProgress();  

        // load new card
        this.getNewCard(); 
    }

    UI.prototype.setEditorDeck = function(){

        console.log('[DEBUG] UI.setEditorDeck');

        // get the active deck's ID
        var deckId = Number(this.elements.editor.decks.show.dropdown.select.value);

        // update current editor values
        this.updateEditorSelectedDeck();

        // update stack label 
        this.updateEditorStackLabel(deckId);
    }

    UI.prototype.setupDeckSelection = function(){

        console.log('[DEBUG] UI.setupDeckSelection');
        
        // add the options to the viewer and editor drop-downs
        this.addOptions();

        // set a default deck for the card view
        this.setViewerDeck();
        this.setEditorDeck();
    }

    UI.prototype.enableDeckSelection = function(){
        console.log('[DEBUG] UI.enableDeckSelection');
        this.elements.viewer.dropdown.select.addEventListener('change', this.handlers.setViewerDeck);
        this.elements.editor.decks.show.dropdown.select.addEventListener('change', this.handlers.setEditorDeck);
    }

    UI.prototype.disableDeckSelection = function(){
        console.log('[DEBUG] UI.disableDeckSelection');
        this.elements.viewer.dropdown.select.removeEventListener('change', this.handlers.setViewerDeck);
        this.elements.editor.decks.show.dropdown.select.removeEventListener('change', this.handlers.setEditorDeck);
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

        // clone the same option to the editor deck select
        var copyViewerSelect = this.elements.viewer.dropdown.select.innerHTML;
        this.elements.editor.decks.show.dropdown.select.innerHTML = copyViewerSelect;   
    }

    UI.prototype.resetProgress = function(){

        console.log('[DEBUG] UI.resetProgress');

        // reset the width to 0
        this.elements.viewer.progressbar.correct.style.width = '0%';
        this.elements.viewer.progressbar.incorrect.style.width = '0%';
        this.elements.viewer.progressbar.skipped.style.width = '0%';

        // reset the current values to 0
        this.dataInstance.current.correct = 0;
        this.dataInstance.current.incorrect = 0;
        this.dataInstance.current.skipped = 0;
    }

    // updates the progress bar
    UI.prototype.updateProgress = function(option){

        console.log('[DEBUG] UI.updateProgress');

        // make changes based on button
        switch(option){

            case 'correct':
                if(this.dataInstance.current.card.status === 'incorrect'){
                    this.dataInstance.current.incorrect--;
                    this.dataInstance.current.correct++;
                    this.dataInstance.current.card.status = 'correct';
                }
                else if(this.dataInstance.current.card.status === 'skipped'){
                    this.dataInstance.current.skipped--;
                    this.dataInstance.current.correct++;
                    this.dataInstance.current.card.status = 'correct';
                }
                else if(this.dataInstance.current.card.status === null){
                    this.dataInstance.current.correct++;
                    this.dataInstance.current.card.status = 'correct';
                }
                break;

            case 'incorrect':
                if(this.dataInstance.current.card.status === 'skipped'){
                    this.dataInstance.current.skipped--;
                    this.dataInstance.current.incorrect++;
                    this.dataInstance.current.card.status = 'incorrect';
                }
                else if(this.dataInstance.current.card.status === 'correct'){
                    this.dataInstance.current.correct--;
                    this.dataInstance.current.incorrect++;
                    this.dataInstance.current.card.status = 'incorrect';
                }
                else if(this.dataInstance.current.card.status === null){
                    this.dataInstance.current.incorrect++;
                    this.dataInstance.current.card.status = 'incorrect';
                }
                break;

            case 'skipped':
                if(this.dataInstance.current.card.status === 'incorrect'){
                    this.dataInstance.current.incorrect--;
                    this.dataInstance.current.skipped++;
                    this.dataInstance.current.card.status = 'skipped';
                }
                else if(this.dataInstance.current.card.status === 'correct'){
                    this.dataInstance.current.correct--;
                    this.dataInstance.current.skipped++;
                    this.dataInstance.current.card.status = 'skipped';
                }
                else if(this.dataInstance.current.card.status === null){
                    this.dataInstance.current.skipped++;
                    this.dataInstance.current.card.status = 'skipped';
                }
                break;
        }

        // set the width equal to the percentage of correct/incorrect/skipped 
        this.elements.viewer.progressbar.correct.style.width = 
            (this.dataInstance.current.correct / this.dataInstance.current.total) * 100 + '%';

        this.elements.viewer.progressbar.incorrect.style.width = 
            (this.dataInstance.current.incorrect / this.dataInstance.current.total) * 100 + '%';

        this.elements.viewer.progressbar.skipped.style.width = 
            (this.dataInstance.current.skipped / this.dataInstance.current.total) * 100 + '%';
    }

    UI.prototype.flipCard = function(){
        console.log('[DEBUG] UI.flipCard');
        fn.addClass(this.elements.viewer.flashcard.card, 'flipped');
    }

    UI.prototype.flipCardBack = function(){
        console.log('[DEBUG] UI.flipCardBack');
        fn.removeClass(this.elements.viewer.flashcard.card, 'flipped');
    }

    UI.prototype.disableCardFlipping = function(){
        console.log('[DEBUG] UI.disableCardFlipping');
        // mouse enter and leave events to flip card
        this.elements.viewer.flashcard.container.removeEventListener('mouseenter', this.handlers.flip);
        this.elements.viewer.flashcard.container.removeEventListener('mouseleave', this.handlers.flipBack);
        this.elements.viewer.flashcard.front.removeEventListener('click', this.handlers.flip);
        this.elements.viewer.flashcard.back.removeEventListener('click', this.handlers.flipBack);
    }

    UI.prototype.enableCardFlipping = function(){
        console.log('[DEBUG] UI.enableCardFlipping');
        // mouse enter and leave events to flip card
        this.elements.viewer.flashcard.container.addEventListener('mouseenter', this.handlers.flip);
        this.elements.viewer.flashcard.container.addEventListener('mouseleave', this.handlers.flipBack);
        // helps mobile users since they can't enter or leave with a mouse
        this.elements.viewer.flashcard.front.addEventListener('click', this.handlers.flip);
        this.elements.viewer.flashcard.back.addEventListener('click', this.handlers.flipBack);
    }

    UI.prototype.enableCardButtons = function(){
        console.log('[DEBUG] UI.enableCardButtons');
        this.elements.viewer.button.correct.addEventListener('click', this.handlers.correct);
        this.elements.viewer.button.incorrect.addEventListener('click', this.handlers.incorrect);
        this.elements.viewer.button.skip.addEventListener('click', this.handlers.skipped);
    }

    UI.prototype.disableCardButtons = function(){
        console.log('[DEBUG] UI.disableCardButtons');
        this.elements.viewer.button.correct.removeEventListener('click', this.handlers.correct);
        this.elements.viewer.button.incorrect.removeEventListener('click', this.handlers.incorrect);
        this.elements.viewer.button.skip.removeEventListener('click', this.handlers.skipped);
    }

    UI.prototype.getButtonValue = function(option){

        console.log('[DEBUG] UI.getButtonValue');
        var current = this.dataInstance.current;
        console.log('current.card.status', this.dataInstance.current.card.status);

        if(current.card.status !== undefined){

            console.log('option selected', option);

            // update progress
            this.updateProgress(option);

            if(option === 'incorrect' || option === 'skipped'){

                // move card to back of deck
                current.cards.unshift(current.card);
            }

            this.getNewCard(); 
        }    
        else {

            // ran out of cards, restart the deck
            this.setViewerDeck();
        }
    }

    UI.prototype.setFront = function(text){
        console.log('[DEBUG] UI.setFront');
        if(text){
            this.elements.viewer.flashcard.text.front.innerText = text;
        }
    }

    UI.prototype.setBack = function(text){
        console.log('[DEBUG] UI.setBack');
        if(text){
            this.elements.viewer.flashcard.text.back.innerText = text;
        }
        else {
            this.elements.viewer.flashcard.text.back.innerText = 'You didn\'t believe me did you? =P';
        }
    }

    UI.prototype.getNewCard = function(){

        console.log('[DEBUG] UI.getNewCard');

        if(this.dataInstance.current.cards.length > 0){

            // pop a card off of the deck 
            this.dataInstance.current.card = this.dataInstance.current.cards.pop();

            // set the text on the card
            this.setFront(this.dataInstance.current.card.front);

            // set the back to blank and wait 500 ms to set the back text
            // this prevents the user from seeing it ahead of time on card changes
            this.setBack('(loading...)');

            setTimeout(function(){
                this.setBack(this.dataInstance.current.card.back);
            }.bind(this), 500); // equal to transition time in style.css
        }
        else {
            this.dataInstance.current.card = {};
            this.dataInstance.current.cards = [];
            this.setFront('Congratulations! You\'ve finished the deck!');
            this.setBack('You didn\'t believe me did you? =P');           
        }
    }
    
    UI.prototype.changeViewToViewer = function(){
        console.log('[DEBUG] selected viewer');
        fn.setVisible('router-view', 'disabled', this.elements.viewer.view.id);
        fn.setVisible('router-menu', 'disabled', this.elements.header.menu.option.editor.id);
    }

    UI.prototype.changeViewToEditor = function(){
        console.log('[DEBUG] selected editor');
        fn.setVisible('router-view', 'disabled', this.elements.editor.view.id);
        fn.setVisible('router-menu', 'disabled', this.elements.header.menu.option.viewer.id);
    }

    UI.prototype.disableRoutes = function(){
        console.log('[DEBUG] UI.disableRoutes');
        this.elements.header.menu.option.viewer.removeEventListener('click', this.handlers.changeViewToViewer);
        this.elements.header.menu.option.editor.removeEventListener('click', this.handlers.changeViewToEditor);
    }

    UI.prototype.enableRoutes = function(){
        console.log('[DEBUG] UI.enableRoutes');
        this.elements.header.menu.option.viewer.addEventListener('click', this.handlers.changeViewToViewer);
        this.elements.header.menu.option.editor.addEventListener('click', this.handlers.changeViewToEditor);
    }

    UI.prototype.enableLoginLogout = function(){
        console.log('[DEBUG] UI.enableLoginLogout');
        this.elements.header.menu.option.login.addEventListener('click', this.handlers.login);
        this.elements.header.menu.option.logout.addEventListener('click', this.handlers.logout);
    }

    UI.prototype.editorEditDeck = function(){
        console.log('[DEBUG] UI.editorEditDeck');
        // set the edit deck's stack and deck title
        this.elements.editor.decks.edit.input.stack.value = this.dataInstance.current.editor.stack.name;
        this.elements.editor.decks.edit.input.title.value = this.dataInstance.current.editor.deck.title;

        this.setInputDirty([
            this.elements.editor.decks.edit.input.stack, 
            this.elements.editor.decks.edit.input.title
        ]);
        
        fn.setVisible('router-editor-view', 'disabled', this.elements.editor.decks.edit.view.id);
    }

    UI.prototype.editorAddDeck = function(){
        console.log('[DEBUG] UI.editorEditDeck');
        // set the edit deck's stack and deck title
        this.elements.editor.decks.add.input.stack.value = this.dataInstance.current.editor.stack.name;

        this.setInputDirty([
            this.elements.editor.decks.add.input.stack        
        ]);
        
        fn.setVisible('router-editor-view', 'disabled', this.elements.editor.decks.add.view.id);
    }

    UI.prototype.editorEditCard = function(){
        console.log('[DEBUG] UI.editorEditCard');

        if(this.elements.editor.decks.show.input.card.value){
            
            var cardSearch = this.elements.editor.decks.show.input.card.value;
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
            for(var i = 0; i < this.dataInstance.current.editor.cards.length; i++){

                var editorCardFront = this.dataInstance.current.editor.cards[i].front;

                // if a match is found, get its id
                if(editorCardFront.indexOf(front) !== -1){
                    console.log('match found', editorCardFront);

                    this.dataInstance.current.editor.card = this.dataInstance.current.editor.cards[i];
                    this.elements.editor.cards.edit.input.front.value = this.dataInstance.current.editor.card.front;
                    this.elements.editor.cards.edit.input.back.value = this.dataInstance.current.editor.card.back;

                    this.setInputDirty([
                        this.elements.editor.cards.edit.input.front,
                        this.elements.editor.cards.edit.input.back
                    ]);
                    break;
                }
            }

            fn.setVisible('router-editor-view', 'disabled', this.elements.editor.cards.edit.view.id);
        }        
    }

    UI.prototype.editorAddCard = function(){
        console.log('[DEBUG] UI.editorAddCard');
        fn.setVisible('router-editor-view', 'disabled', this.elements.editor.cards.add.view.id);
    }

    UI.prototype.cancelEdit = function(){
        console.log('[DEBUG] UI.cancelEdit');
        fn.setVisible('router-editor-view', 'disabled', this.elements.editor.decks.show.view.id);
    }

    UI.prototype.editorCardSelectAll = function(){
        console.log('[DEBUG] UI.editorCardSelectAll');
        // select everything in this field so its easy to type over
        this.elements.editor.decks.show.input.card.focus();
        this.elements.editor.decks.show.input.card.select();
    }

    UI.prototype.enableEditorButtons = function(){
        console.log('[DEBUG] UI.enableEditorButtons');
        // edit/add buttons
        this.elements.editor.decks.show.button.edit.deck.addEventListener('click', this.handlers.editorEditDeck);
        this.elements.editor.decks.show.button.add.deck.addEventListener('click', this.handlers.editorAddDeck);
        this.elements.editor.decks.show.button.edit.card.addEventListener('click', this.handlers.editorEditCard);
        this.elements.editor.decks.show.button.add.card.addEventListener('click', this.handlers.editorAddCard);
        
        // select all card input
        this.elements.editor.decks.show.button.selectAll.addEventListener('click', this.handlers.editorCardSelectAll);
        
        // cancel buttons
        this.elements.editor.decks.edit.button.cancel.addEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.decks.add.button.cancel.addEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.cards.edit.button.cancel.addEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.cards.add.button.cancel.addEventListener('click', this.handlers.cancelEdit);
        
    }

    UI.prototype.disableEditorButtons = function(){
        console.log('[DEBUG] UI.disableEditorButtons');
        // edit deck button
        this.elements.editor.decks.show.button.edit.deck.removeEventListener('click', this.handlers.editorEditDeck);
        this.elements.editor.decks.show.button.add.deck.removeEventListener('click', this.handlers.editorAddDeck);
        this.elements.editor.decks.show.button.edit.card.removeEventListener('click', this.handlers.editorEditCard);
        this.elements.editor.decks.show.button.add.card.removeEventListener('click', this.handlers.editorAddCard);
        
        // select all card input
        this.elements.editor.decks.show.button.selectAll.removeEventListener('click', this.handlers.editorCardSelectAll);

        // cancel buttons
        this.elements.editor.decks.edit.button.cancel.removeEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.decks.add.button.cancel.removeEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.cards.edit.button.cancel.removeEventListener('click', this.handlers.cancelEdit);
        this.elements.editor.cards.add.button.cancel.removeEventListener('click', this.handlers.cancelEdit);
    }

    UI.prototype.setInputDirty = function(elements){
        console.log('[DEBUG] UI.setInputDirty');
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

    UI.prototype.setupFindCardAutoComplete = function(){
        console.log('[DEBUG] UI.setupFindCardAutoComplete');
        var self = this;
        $('#editor-card-input').autoComplete({
            minChars: 2,
            cache: false,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = self.dataInstance.current.editor.cards;
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

    // old event listeners method, needs to be stripped out
    UI.prototype.enableEventListeners = function(){

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

        // add events for button presses
        this.enableCardButtons();
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