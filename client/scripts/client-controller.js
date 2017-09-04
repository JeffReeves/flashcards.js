// 3rd party dependencies: jQuery v3.2.1, mui-0.9.22
// local dependencies: functions.js
'use strict';

// UPDATES NEEDED:
// - CREATE A PROTOTYPE METHOD TO SET THE 
//     INTERFACE BACK TO A DEFAULT CONDITION ON LOGOUT
// - EDITOR VIEW DROPDOWN NEEDS TO DISPLAY ALL DECKS
// - EDITOR VIEW NEEDS A COMPLETED VIEW AND ROUTER

var apiUrl = '/flashcards/api/'; // PROD API

if(window.location.origin.indexOf('alchemist.digital') === -1){
    apiUrl = '../test-api/'; // DEV API
}

var User = (function(){

    function User(username){
        this.username = username;
        this.id = 0;
        this.decks = [];

        // get all data / cards belonging to this user
        this.getData(this.username);
    }

    User.prototype.getData = function(username){
        
        var self = this;

        $.getJSON(apiUrl + 'users/' + username)
        .then(function(userData){
            var user = userData[0];
            self.id = user.id;
            return $.getJSON(apiUrl + 'decks/userid/' + user.id);
        })
        .then(function(deckData) {
            var decks = deckData;
            var requests = [];
            // iterate through all decks
            for(var i = 0; i < decks.length; i++){
                var deck = deckData[i];
                var request = $.getJSON(apiUrl + 'cards/deckid/' + deck.id);
                requests.push(request);

                self.decks.push(new Deck(deck));
            }

            // iterate through the list of getJSON requests for cards
            $.when.apply($, requests)
            .done(function(){
                var data = arguments;
                for(var i = 0; i < data.length; i++){
                    var cards = data[i][0];
                    for(var j = 0; j < cards.length; j++){
                        var card = cards[j];
                        self.decks[i].cards.push(new Card(card));
                    }
                }

                // we now have all decks and cards for the user
                console.log('got everything we need:', self);

                // tell the interface that a user logged in
                flashcardsjs.interface.userLogin(self);
            })
        });
    }

    return User;
}());

var Deck = (function(){
    
    function Deck(obj){
        this.title = obj.title;
        this.id = obj.id || null;
        this.stack = obj.stack;
        this.cards = [];
    }

    return Deck;
}());

var Card = (function(){

    function Card(obj){
        this.front = obj.front;
        this.back = obj.back;
        this.id = obj.id || null;
        this.status = obj.status || null;
    }

    return Card;
}());

var Modal = (function(){

    var _options = {
        'keyboard': true, 
        'static': false, 
        'onclose': function() {
                //console.log('modal closed');
            } 
        };
    
    function Modal(){
        this.elements = {
            modal: document.getElementById('loginModal'),
            loginButton: document.getElementById('loginButton'),
            username: document.getElementById('loginUsername'),
            password: document.getElementById('loginPassword')
        };
        
        this.initialize();
    }

    Modal.prototype.initialize = function(){

        // if the login button is clicked 
        this.elements.loginButton.addEventListener('click', function(){

            // remove default events for submit
            event.preventDefault();

            // try to get a value from the username input field
            var username = this.elements.username.value;
            // and if a username value was entered
            if(username){
                // create the user
                flashcardsjs.user = new User(username);
                // and close the modal
                this.close();
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

var Interface = (function(){
    
    function Interface(){

        // bind to all elements on page 
        // and generate a new modal for logins
        this.elements = {

            // modal
            modal: new Modal(),

            // controls 
            dropdownMenu: document.getElementById('dropdown-menu'),
            editorDropdownMenu: document.getElementById('editor-deck-select'),
            
            // menu options
            menuLogin: document.getElementById('menu-login'),
            menuCardView: document.getElementById('menu-card-view'),
            menuEditView: document.getElementById('menu-edit-view'),
            menuLogout: document.getElementById('menu-logout'),

            // card view
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

            // editor view
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

                // edit decks view
                editDeck: document.getElementById('edit-deck'),

                    // edit deck form
                    editDeckForm: document.getElementById('edit-deck-form'),

                        // input fields
                        editDeckStack: document.getElementById('edit-deck-stack'),
                        editDeckTitle: document.getElementById('edit-deck-title'),

                        // buttons
                        editDeckSaveButton: document.getElementById('edit-deck-save-button'),
                        editDeckCancelButton: document.getElementById('edit-deck-cancel-button'),
                        editDeckDeleteButton: document.getElementById('edit-deck-delete-button'),

                // add decks view
                addDeck: document.getElementById('add-deck'),
                
                    // add deck form 
                    addDeckForm: document.getElementById('add-deck-form'),

                        // input fields
                        newDeckStack: document.getElementById('new-deck-stack'),
                        newDeckTitle: document.getElementById('new-deck-title'),

                        // buttons
                        addDeckSaveButton: document.getElementById('add-deck-save-button'),
                        addDeckCancelButton: document.getElementById('add-deck-cancel-button'),
                                        
                // add card view
                editCard: document.getElementById('edit-card'),

                    // add card form
                    editCardForm: document.getElementById('edit-card-form'),
                
                        // add card view
                        editCardFront: document.getElementById('edit-card-front'),
                        editCardBack: document.getElementById('edit-card-back'),

                        // buttons
                        editCardSaveButton: document.getElementById('edit-card-save-button'),
                        editCardCancelButton: document.getElementById('edit-card-cancel-button'),
                        editCardDeleteButton: document.getElementById('edit-card-delete-button'),
                
                // add card view
                addCard: document.getElementById('add-card'),

                    // add card form
                    addCardForm: document.getElementById('add-card-form'),
                
                        // add card view
                        newCardFront: document.getElementById('new-card-front'),
                        newCardBack: document.getElementById('new-card-back'),

                        // buttons
                        addCardSaveButton: document.getElementById('add-card-save-button'),
                        addCardCancelButton: document.getElementById('add-card-cancel-button')
        };

        // set a number of values to hold for the interface's sake
        this.current = {};

        // clear all current values
        this.clearCurrent();

        // start the initialization process
        this.initialize();
    }

    Interface.prototype.clearCurrent = function(){
        this.current = {
            username: '',
            userId: 0,
            decks: [],
            deck: {},
            cards: [],
            card: {},
            totalCards: 0,
            correct: 0,
            incorrect: 0,
            skipped: 0,
            editorDecks: [],
            editorDeck: [],
            editorCards: [],
            editorCard: []
        };
    }

    Interface.prototype.setupFindCardAutoComplete = function(){
        var self = this;
        $('#editor-card-input').autoComplete({
            minChars: 2,
            cache: false,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = flashcardsjs.interface.current.editorDeck.cards;
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

    // sets up everything we need to be ready on the interface
    Interface.prototype.initialize = function(){
    
        // open the login modal
        this.elements.modal.open();

        // set the method for flipping cards
        this.enableEventListeners();

        // enable the autocomplete option on the find card input field
        this.setupFindCardAutoComplete();
    }

    Interface.prototype.getButtonValue = function(){

        var self = flashcardsjs.interface;

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
    }

    Interface.prototype.flipCard = function(){
        var self = flashcardsjs.interface;
        fn.addClass(self.elements.flashcard, 'flipped');
    }

    Interface.prototype.flipCardBack = function(){
        var self = flashcardsjs.interface;
        fn.removeClass(self.elements.flashcard, 'flipped');
    }

    // occurs after a user has logged in
    Interface.prototype.userLogin = function(user){
    
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

    Interface.prototype.logIn = function(){

        var self = flashcardsjs;

        // open the login modal
        self.interface.elements.modal.open();
    }

    Interface.prototype.logOut = function(){
        var self = flashcardsjs;

        // remove user from current end destroy user object
        self.user = undefined;
        
        // remove all current values 
        self.interface.clearCurrent();

        // reset progress
        self.interface.resetProgress();

        // show the login menu item
        fn.removeClass(self.interface.elements.menuLogin, 'disabled');
        
        // hide the card view, editor view, and logout menu items
        fn.addClass(self.interface.elements.menuCardView, 'disabled');
        fn.addClass(self.interface.elements.menuEditView, 'disabled');
        fn.addClass(self.interface.elements.menuLogout, 'disabled');

        // move to card view
        fn.setVisible('router-view', 'disabled', self.interface.elements.cardView.id);

        // re-open the login modal
        self.interface.elements.modal.open();
    }

    Interface.prototype.enableCardButtons = function(){
        this.elements.correctButton.addEventListener('click', this.getButtonValue);
        this.elements.incorrectButton.addEventListener('click', this.getButtonValue);
        this.elements.skipButton.addEventListener('click', this.getButtonValue);
    }

    Interface.prototype.setInputDirty = function(elements){

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

    // enables and disables card flipping
    Interface.prototype.enableEventListeners = function(){
        
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
        this.elements.editorDropdownMenu.addEventListener('change', function(){
            var idNumber = Number(this.elements.editorDeckSelect.value);
            this.selectEditorDeck(idNumber);
        }.bind(this));

        // edit deck button
        this.elements.editorDeckEditButton.addEventListener('click', function(){
            //fn.setVisible('router-editor-view', 'disabled', this.elements.editDeck.id);
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
            console.log('clicked edit card button');

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
                    console.log('found card:', this.current.editorCards[i]);
                    var card = this.current.editorCards[i];
                    this.elements.editCardFront.value = card.front;
                    this.elements.editCardBack.value = card.back;
                    this.setInputDirty([
                        this.elements.editCardFront,
                        this.elements.editCardBack
                    ]);
                }
            }

            fn.setVisible('router-editor-view', 'disabled', this.elements.editCard.id);
        }.bind(this));

        // add card button
        this.elements.editorCardAddButton.addEventListener('click', function(){
            console.log('clicked add card button');
            fn.setVisible('router-editor-view', 'disabled', this.elements.addCard.id);
        }.bind(this));

        // edit deck's save button
        this.elements.editDeckSaveButton.addEventListener('click', function(){
            console.log('editing existing deck...')
            var stack = this.elements.editDeckStack.value;
            var title = this.elements.editDeckTitle.value;

            // TODO: sanitize input and send to API via POST request
            console.log('[Existing Deck]');
            console.log('Stack: ', stack);
            console.log('Title: ', title);
        }.bind(this));

        // add deck's save button
        this.elements.addDeckSaveButton.addEventListener('click', function(){
            console.log('saving new deck...')
            var stack = this.elements.newDeckStack.value;
            var title = this.elements.newDeckTitle.value;

            // TODO: sanitize input and send to API via POST request
            console.log('[New Deck]');
            console.log('Stack: ', stack);
            console.log('Title: ', title);
        }.bind(this));

        // edit cards's save button
        this.elements.editCardSaveButton.addEventListener('click', function(){
            console.log('editing card...')
            var front = this.elements.editCardFront.value;
            var back = this.elements.editCardBack.value;

            // TODO: sanitize input and send to API via POST request
            console.log('[New Card]');
            console.log('Front: ', front);
            console.log('Back: ', back);
        }.bind(this));

        // add cards's save button
        this.elements.addCardSaveButton.addEventListener('click', function(){
            console.log('saving new card...')
            var front = this.elements.newCardFront.value;
            var back = this.elements.newCardBack.value;

            // TODO: sanitize input and send to API via POST request
            console.log('[New Card]');
            console.log('Front: ', front);
            console.log('Back: ', back);
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

    Interface.prototype.resetProgress = function(){

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
    Interface.prototype.updateProgress = function(button){

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

    Interface.prototype.addOptions = function(options){
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

    Interface.prototype.setupDeckSelection = function(){

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

    Interface.prototype.selectEditorDeck = function(deckId){
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
    Interface.prototype.selectCardViewDeck = function(deckId){

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

    Interface.prototype.setFront = function(text){
        this.elements.frontText.innerText = text;
    }

    Interface.prototype.setBack = function(text){
        this.elements.backText.innerText = text;
    }

    Interface.prototype.getNewCard = function(){
        
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

    return Interface;
}());

// MAIN
var flashcardsjs = {};
flashcardsjs.interface = new Interface(); // create a new interface