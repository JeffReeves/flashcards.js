// 3rd party dependencies: jQuery v3.2.1, mui-0.9.22
// local dependencies: functions.js

const prodApi = '/flashcards/api/'; // PROD API
const devApi = '../test-api/'; // TEST API

var user = {};

var Api = (function(){

    function Api(url){
        this.url = url || devApi;
        this.userUrl = this.url + 'users/';
        this.decksUrl = this.url + 'decks/userid/';
        this.cardsUrl = this.url + 'cards/deckid/';
        this.allCardsUrl = this.url + 'cards/userid/';
    }

    return Api;
}());

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

        $.getJSON(devApi + 'users/' + username)
        .then(function(userData){
            var user = userData[0];
            self.id = user.id;
            return $.getJSON(devApi + 'decks/userid/' + user.id);
        })
        .then(function(deckData) {
            var decks = deckData;
            var requests = [];
            // iterate through all decks
            for(var i = 0; i < decks.length; i++){
                var deck = deckData[i];
                var request = $.getJSON(devApi + 'cards/deckid/' + deck.id);
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
                interface.userLogin(self);
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
            // try to get a value from the username input field
            var username = this.elements.username.value;
            // and if a username value was entered
            if(username){
                // create the user
                user = new User(username);
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
    
            // menu options
            menuCardView: document.getElementById('menu-card-view'),
            menuEditView: document.getElementById('menu-edit-view'),
            menuLoginModal: document.getElementById('menu-login-modal'),
    
            // views
            cardView: document.getElementById('cardView'),
            editorView: document.getElementById('editorView'),
    
            // flashcards
            flashcardContainer: document.getElementById('flashcard-container'),
            flashcard: document.getElementById('flashcard'),
            front: document.getElementById('front'),
            back: document.getElementById('back'),
            frontText: front.getElementsByTagName('p')[0],
            backText: back.getElementsByTagName('p')[0],
    
            // progress bar
            progressBar: document.getElementById('progress-bar'),
            correctProgress: document.getElementById('correct-progress'),
            incorrectProgress: document.getElementById('incorrect-progress'),
            skippedProgress: document.getElementById('skipped-progress'),
    
            // dropdown to select decks
            deckSelect: document.getElementById('deck-select'),
    
            // buttons
            correctButton: document.getElementById('correct'),
            incorrectButton: document.getElementById('incorrect'),
            skipButton: document.getElementById('skip')
        };

        // set a number of values to hold for the interface's sake
        this.current = {};

        this.clearCurrnt();

        // start the initialization process
        this.initialize();
    }

    Interface.prototype.clearCurrnt = function(){
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
            skipped: 0
        };
    }

    // sets up everything we need to be ready on the interface
    Interface.prototype.initialize = function(){
    
        // open the login modal
        this.elements.modal.open();

        // set the method for flipping cards
        this.enableCardFlipping();

        // activate the buttons
        this.enableButtons();
    }

    // enables and disables card flipping
    Interface.prototype.enableCardFlipping = function(){
        
        this.elements.flashcardContainer.addEventListener('mouseover', function(){
            fn.toggleClass(this.children[0], 'flipped');
        });

        // add event for mouse exit
        this.elements.flashcardContainer.addEventListener('mouseout', function(){
            fn.toggleClass(this.children[0], 'flipped');
        });

        // TEST ROUTES
        this.elements.menuCardView.addEventListener('click', function(){
            fn.setVisible('router-view', 'disabled', this.elements.cardView.id);
            fn.setVisible('router-menu', 'disabled', this.elements.menuEditView.id);
        }.bind(this));

        this.elements.menuEditView.addEventListener('click', function(){    
            fn.setVisible('router-view', 'disabled', this.elements.editorView.id);
            fn.setVisible('router-menu', 'disabled', this.elements.menuCardView.id);
        }.bind(this));

        this.elements.menuLoginModal.addEventListener('click', function(){
            
            // remove user from current end destroy user object
            user = undefined;

            // remove all current values 
            this.clearCurrnt();
            
            this.elements.modal.open();
        }.bind(this));
    }

    Interface.prototype.enableButtons = function(){

        console.log('[DEBUG] Interface.enableButtons');

        // add events for button presses
        this.elements.correctButton.addEventListener("click", function(){

            // send button to get id
            var button = this.elements.correctButton.id;

            if(this.current.card.status !== undefined){

                // update progress
                this.updateProgress(button);
                
                // load the next card
                this.setCard();           
            } 
        }.bind(this));

        this.elements.incorrectButton.addEventListener("click", function(){

            // send button to get id
            var button = this.elements.incorrectButton.id;

            if(this.current.card.status !== undefined){

                // update progress
                this.updateProgress(button);

                // move card to back of deck
                this.current.cards.unshift(this.current.card);
                
                // load the next card
                this.setCard();  
            }
        }.bind(this));

        this.elements.skipButton.addEventListener("click", function(){

            // send button to get id
            var button = this.elements.skipButton.id;

            if(this.current.card.status !== undefined){
            
                // update progress
                this.updateProgress(button);
                    
                // move card to back of deck
                this.current.cards.unshift(this.current.card);
                    
                // load the next card
                this.setCard();       
            }     
        }.bind(this));
    }

    Interface.prototype.resetProgress = function(){

        console.log('[DEBUG] Interface.resetProgress');

        this.elements.correctProgress.style.width = '0%';
        this.elements.incorrectProgress.style.width = '0%';
        this.elements.skippedProgress.style.width = '0%';
        this.current.correct = 0;
        this.current.incorrect = 0;
        this.current.skipped = 0;
    }

    // updates the progress bar
    Interface.prototype.updateProgress = function(button){

        console.log('[DEBUG] Interface.updateProgress');

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

        this.elements.correctProgress.style.width = (this.current.correct / this.current.totalCards) * 100 + '%';
        this.elements.incorrectProgress.style.width = (this.current.incorrect / this.current.totalCards) * 100 + '%';
        this.elements.skippedProgress.style.width = (this.current.skipped / this.current.totalCards) * 100 + '%';
    };

    // occurs after a user has logged in
    Interface.prototype.userLogin = function(user){

        // user details
        this.current.username = user.username;
        this.current.userId = user.id;

        // deck details
        this.current.decks = user.decks;

        // card details
        this.current.cards = user.decks[0];

        this.setupDeckSelection();
    }

    Interface.prototype.addOptions = function(options){
    // options = [{stack: '', decks: [{id: 0, title: ''}]}]

        // remove existing dropdown elements
        this.elements.deckSelect.innerHTML = '';

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

            // append it to the select dropdown
            this.elements.deckSelect.appendChild(optionGroup);
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

        // set a default deck
        this.selectDeck();

        // create an onchange event to switch selected deck
        this.elements.deckSelect.addEventListener('change', function(){
            
            var deckId = Number(interface.elements.deckSelect.value);
            this.selectDeck(deckId);

            // reset progress bar
            this.resetProgress();

        }.bind(this));
    }

    // set the current deck to the one selected in the dropdown
    // or default to the first one available
    Interface.prototype.selectDeck = function(deckId){

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
        this.current.totalCards = this.current.cards.length;

        // select a new card off the top
        this.setCard()
    }

    Interface.prototype.setCard = function(){

        console.log('[DEBUG] Interface.setCard');

        if(this.current.cards.length > 0){
            // pop a card off of the deck 
            this.current.card = this.current.cards.pop();

            // set the text on the card
            this.elements.frontText.innerText = this.current.card.front;
            this.elements.backText.innerText = this.current.card.back;
        }
        else {
            this.current.card = {};
            this.current.cards = [];
            this.elements.frontText.innerText = 'Congratulations! You\'ve finished the deck!';
            this.elements.backText.innerText = 'You didn\'t believe me did you? =P';            
        }
    }

    return Interface;
}());

// TEST
//var api = new Api(devApi); // set up the API so we can read from it
var interface = new Interface(); // create a new interface