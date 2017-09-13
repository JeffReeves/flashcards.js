// 3rd party dependencies: mui-0.9.22, jQuery v3.2.1, jQuery-autoComplete-1.0.7
// local dependencies: functions.js
'use strict';

// UPDATES NEEDED:
// - rewrite all classes to ensure readability and ease of extensibility
// - refactor all logic for UI class when all classes have been updated 


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

    return Data;
}());

//--[ MODAL ]------------------------------------------------------------------

var Modal = (function(){

    var _options = {
        'keyboard': true, 
        'static': false, 
        'onclose': function(){} 
    };
    
    function Modal(dataInstance){
        this.username = '';
        this.password = '';
        this.elements = {};
        this.dataInstance = {};
        
        this.setData(dataInstance);
        this.getElements();
        this.setEventListeners();
    }

    Modal.prototype.setData = function(dataInstance){
        if(dataInstance){
            this.dataInstance = dataInstance;
        }
    }

    Modal.prototype.getElements = function(){

        // hardcoded values for now 
        this.elements.modal = document.getElementById('loginModal');
        this.elements.button = {};
        this.elements.button.login = document.getElementById('loginButton');
        this.elements.input = {};
        this.elements.input.username = document.getElementById('loginUsername');
        this.elements.input.password = document.getElementById('loginPassword');
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
                            this.close();;
                        }.bind(this));
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
    
    function UI(data){

        // copy data from instantiated Data class 
        this.data = data || {};

        // currently held values (decks, cards, users, etc.)
        this.current = {};

        // all page elements
        this.elements = {

        //--[ shared ]-----------------------------------------------------

            // controls 
            dropdownMenu: document.getElementById('dropdown-menu'),
            
            // menu options
            menuLogin: document.getElementById('menu-login'),
            menuCardView: document.getElementById('menu-card-view'),
            menuEditView: document.getElementById('menu-edit-view'),
            menuLogout: document.getElementById('menu-logout'),

        //--[ modal ]------------------------------------------------------

            modal: new Modal(),

        //--[ card view ]--------------------------------------------------
            cardView: document.getElementById('cardView'),
        
            // dropdown to select decks
            cardDeckSelect: document.getElementById('card-deck-select'),

            // progress bar
            progressBar: document.getElementById('progress-bar'),
            correctProgress: document.getElementById('correct-progress'),
            incorrectProgress: document.getElementById('incorrect-progress'),
            skippedProgress: document.getElementById('skipped-progress'),

            // flashcards
            flashcardContainer: document.getElementById('flashcard-container'),
            flashcard: document.getElementById('flashcard'),
            front: document.getElementById('front'),
            back: document.getElementById('back'),
            frontText: front.getElementsByTagName('p')[0],
            backText: back.getElementsByTagName('p')[0],

            // buttons
            correctButton: document.getElementById('correct'),
            incorrectButton: document.getElementById('incorrect'),
            skipButton: document.getElementById('skip'),

        //--[ editor view ]------------------------------------------------

            editorView: document.getElementById('editorView'),
            showDecks: document.getElementById('show-decks'),

            // dropdown select
            editorDeckSelect: document.getElementById('editor-deck-select'),     
            
            // deck edit / add buttons
            editorDeckEditButton: document.getElementById('editor-deck-edit-button'),
            editorDeckAddButton: document.getElementById('editor-deck-add-button'),

            // card input field
            editorCardInput: document.getElementById('editor-card-input'),
            editorCardSelectAll: document.getElementById('editor-card-select-all'),

            // card buttons
            editorCardEditButton: document.getElementById('editor-card-edit-button'),
            editorCardAddButton: document.getElementById('editor-card-add-button'),

        //--[ edit deck view ]---------------------------------------------

            editDeck: document.getElementById('edit-deck'),
            editDeckForm: document.getElementById('edit-deck-form'),
            editDeckStack: document.getElementById('edit-deck-stack'),
            editDeckTitle: document.getElementById('edit-deck-title'),
            editDeckSaveButton: document.getElementById('edit-deck-save-button'),
            editDeckCancelButton: document.getElementById('edit-deck-cancel-button'),
            editDeckDeleteButton: document.getElementById('edit-deck-delete-button'),

        //--[ add deck view ]----------------------------------------------

            addDeck: document.getElementById('add-deck'),
            addDeckForm: document.getElementById('add-deck-form'),
            newDeckStack: document.getElementById('new-deck-stack'),
            newDeckTitle: document.getElementById('new-deck-title'),
            addDeckSaveButton: document.getElementById('add-deck-save-button'),
            addDeckCancelButton: document.getElementById('add-deck-cancel-button'),
        
        //--[ edit card view ]---------------------------------------------

            editCard: document.getElementById('edit-card'),
            editCardForm: document.getElementById('edit-card-form'),
            editCardFront: document.getElementById('edit-card-front'),
            editCardBack: document.getElementById('edit-card-back'),
            editCardSaveButton: document.getElementById('edit-card-save-button'),
            editCardCancelButton: document.getElementById('edit-card-cancel-button'),
            editCardDeleteButton: document.getElementById('edit-card-delete-button'),
            
        //--[ add card view ]----------------------------------------------

            addCard: document.getElementById('add-card'),
            addCardForm: document.getElementById('add-card-form'),
            newCardFront: document.getElementById('new-card-front'),
            newCardBack: document.getElementById('new-card-back'),
            addCardSaveButton: document.getElementById('add-card-save-button'),
            addCardCancelButton: document.getElementById('add-card-cancel-button')
        };
    }

    UI.prototype.getUsersCards = function(username){
            
        var self = this;

        $.getJSON(apiUrl + 'users/' + username)
        .then(function(userData){
            var user =  userData[0];
            self.id =   user.id;
            return $.getJSON(apiUrl + 'decks/userid/' + user.id);
        })
        .then(function(deckData) {
            var decks = deckData;
            var requests = [];
            var numRequests = 0;
            // iterate through all decks
            for(var i = 0; i < decks.length; i++){
                var deck = deckData[i];
                var request = $.getJSON(apiUrl + 'cards/deckid/' + deck.id);
                requests.push(request);
                numRequests++;

                self.decks.push(new Deck(deck));
            }

            // iterate through the list of getJSON requests for cards
            $.when.apply($, requests)
            .done(function(){
                var data = arguments;
                for(var i = 0; i < data.length; i++){

                    if(Array.isArray(data[i])){
                        var cards = [];

                        // if only one card exists
                        if(data[i][0].length === undefined){
                            // add it to an array to be parsed
                            cards.push(data[i][0]);
                        }
                        else {
                            // otherwise set the array to the existing array of cards
                            cards = data[i][0];
                        }

                        for(var j = 0; j < cards.length; j++){
                            var card = cards[j];
                            self.decks[i].cards.push(new Card(card));
                        }
                    }
                }

                // we now have all decks and cards for the user
                console.log('got everything we need:', self);

                // tell the UI that a user logged in
                flashcardsjs.UI.userLogin(self);
            })
        });
    }

    // occurs after a user has logged in
    UI.prototype.userLogin = function(user){
    
        // user details
        this.current.username = user.username;
        this.current.userId = user.id;

        // deck details
        this.current.decks = user.decks;
        this.current.editorDecks = user.decks;

        // hide the login menu item
        fn.addClass(this.elements.menuLogin, 'disabled');

        // show the editor view and logout menu items
        fn.removeClass(this.elements.menuEditView, 'disabled');
        fn.removeClass(this.elements.menuLogout, 'disabled');

        // initialize the deck selection dropdown and event handlers 
        this.setupDeckSelection();

        // add items to the editor view
        //this.setupEditor();
    }

    UI.prototype.logIn = function(){

        var self = flashcardsjs;

        // open the login modal
        self.UI.elements.modal.open();
    }

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

    UI.prototype.getButtonValue = function(){
        
        var self = flashcardsjs.UI;

        // get the id of the button
        var buttonId = this.id;

        if(self.current.card.status !== undefined){

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
    }

    UI.prototype.enableCardButtons = function(){
        this.elements.correctButton.addEventListener('click', this.getButtonValue);
        this.elements.incorrectButton.addEventListener('click', this.getButtonValue);
        this.elements.skipButton.addEventListener('click', this.getButtonValue);
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

    UI.prototype.resetProgress = function(){

        // reset the width to 0
        this.elements.correctProgress.style.width = '0%';
        this.elements.incorrectProgress.style.width = '0%';
        this.elements.skippedProgress.style.width = '0%';

        // reset the current values to 0
        this.current.correct = 0;
        this.current.incorrect = 0;
        this.current.skipped = 0;
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

    UI.prototype.addOptions = function(options){
    // options = [{stack: '', decks: [{id: 0, title: ''}]}]

        // remove existing dropdown elements
        this.elements.cardDeckSelect.innerHTML = '';

        // card deck select options
        for(var i = 0; i < options.length; i++){

            // add option group for deck groups
            var optionGroup = document.createElement('optgroup');
            optionGroup.label = options[i].stack;

            for(var j = 0; j < options[i].decks.length; j++){

                // add option for each deck
                var option = document.createElement('option');
                option.setAttribute('value', options[i].decks[j].id);
                option.text = options[i].decks[j].title;

                // append it to the select dropdown
                optionGroup.appendChild(option);
            }

            // append it to the card view select dropdown
            this.elements.cardDeckSelect.appendChild(optionGroup);
        }

        // editor deck select options
        this.elements.editorDeckSelect.innerHTML = '';

        for(var i = 0; i < options.length; i++){
            
            // add option group for deck groups
            var optionGroup = document.createElement('optgroup');
            optionGroup.label = options[i].stack;

            for(var j = 0; j < options[i].decks.length; j++){

                // add option for each deck
                var option = document.createElement('option');
                option.setAttribute('value', options[i].decks[j].id);
                option.text = options[i].decks[j].title;

                // append it to the select dropdown
                optionGroup.appendChild(option);
            }

            // append it to the card view select dropdown
            this.elements.editorDeckSelect.appendChild(optionGroup);
        }       
    }

    UI.prototype.setupDeckSelection = function(){

        var decks = this.current.decks;  
        var stackNames = [];
        var options = []; 

        // iterate through each deck
        for(var i = 0; i < decks.length; i++){

            // add the group to the list if it's not there already
            if(stackNames.indexOf(decks[i].stack) === -1){
                stackNames.push(decks[i].stack);
            }
        }

        // iterate through each group on the group list
        for(var i = 0; i < stackNames.length; i++){

            var stacks = [];

            // and each deck
            for(var j = 0; j < decks.length; j++){

                var deck = {
                    id: 0,
                    title: ''
                };

                if(stackNames[i] === decks[j].stack){
                    deck.id = decks[j].id;
                    deck.title = decks[j].title;

                    stacks.push(deck);
                }
            }

            // add the name and titles to the options list
            options.push({
                stack: stackNames[i],
                decks: stacks
            });
        }

        // add the options to the drop-down
        this.addOptions(options);

        // set a default deck for the card view
        this.selectCardViewDeck();

        // set the default deck for editor view
        this.selectEditorDeck();

        // create an onchange event to switch selected card view deck
        this.elements.cardDeckSelect.addEventListener('change', function(){
            
            var deckId = Number(this.elements.cardDeckSelect.value);
            this.selectCardViewDeck(deckId);

            // reset progress bar
            this.resetProgress();

        }.bind(this));
    }

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
// pass data to modal
flashcardsjs.modal = new Modal(flashcardsjs.data);
// open modal
flashcardsjs.modal.open();


/*==[ TEST ]=================================================================*/