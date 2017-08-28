// 3rd party dependencies: jQuery v3.2.1, mui-0.9.22
// local dependencies: functions.js

const prodApi = 'https://alchemist.digital/flashcards/api/'; // PROD API
const devApi = '../test-api/'; // TEST API

var Api = (function(){

    function Api(url){
        this.url = url || devApi;
        this.userUrl = this.url + 'users/';
        this.decksUrl = this.url + 'decks/userid/';
        this.cardsUrl = this.url + 'cards/deckid/';
        this.allCardsUrl = this.url + 'cards/userid/';
    }

    // old attempt - see User.prototype.getDecks for new
    // removing this in next commit - keeping it in for reference
    Api.prototype.getUserData = function(username){
        $.getJSON(api.userUrl + username)
        .then(function(userData){
            var userId = userData[0].id;
            console.log('userData', userData);
            return $.getJSON(api.decksUrl + userId);
        })
        .then(function(deckData) {
            var decks = deckData;
            console.log('deckData', deckData[0].id);
            return $.getJSON(api.cardsUrl + deckData[0].id);
        })
        .then(function(cardData){
            console.log('cardData', cardData);
        });
    }

    return Api;
}());

var User = (function(){

    function User(username){
        this.username = username;
        this.id = 0;
        this.decks = [];
    }

    User.prototype.getDecks = function(username){

        var that = this;

        $.getJSON(devApi + 'users/' + username)
        .then(function(userData){
            that.id = userData[0].id;
            console.log('userData', userData);
            return $.getJSON(devApi + 'decks/userid/' + that.id);
        })
        .then(function(deckData) {
            that.decks = deckData;
            for(var i = 0; i < that.decks.length; i++){
                console.log('deckData', deckData[i]);
            }
            //return $.getJSON(api.cardsUrl + deckData[0].id);
        });
    }

    User.prototype.getCards = function(username){
        
        var that = this;

        $.getJSON(devApi + 'users/' + username)
        .then(function(userData){
            var userId = userData[0].id;
            that.id = userId;
            return $.getJSON(devApi + 'decks/userid/' + that.id);
        })
        .then(function(deckData) {
            that.decks = deckData;
            var requests = [];
            // iterate through all decks
            for(var i = 0; i < that.decks.length; i++){
                var request = $.getJSON(devApi + 'cards/deckid/' + deckData[i].id);
                requests.push(request);
            }

            // iterate through the list of getJSON requests for cards
            $.when.apply($, requests)
            .done(function(){
                var data = arguments;
                for(var i = 0; i < data.length; i++){
                    var cards = data[i][0];
                    that.decks[i].cards = cards;
                }

                // we now have all decks and cards for the user
                console.log('got everything we need:', that);
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
    }

    return Card;
}());

var Modal = (function(){

    var _options = {
        'keyboard': true, 
        'static': false, 
        'onclose': function() {
                console.log('modal closed');
            } 
        };
    
    function Modal(){
        this.element = document.getElementById('loginModal');
        this.overlay = {};
    }

    Modal.prototype.open = function(){
        mui.overlay('on', _options, this.element);
    }

    Modal.prototype.close = function(){
        mui.overlay('off');
    }
    
    return Modal;
}());

var Interface = (function(){
    
    function Interface(){

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

    Interface.prototype.setupEventListeners = function(){
    }

    Interface.prototype.userLogin = function(user){

        // user details
        this.current.username = user.username;
        this.current.userId = user.id;

        // deck details
        this.current.decks = user.decks;

        this.setupDeckSelection();
    }

    Interface.prototype.addOptions = function(options){
    // options = [{name: '', decks: [{id: 0, title: ''}]}]

        // remove existing dropdown elements
        this.elements.deckSelect.innerHTML = '';

        for(var i = 0; i < options.length; i++){

            // add option group for deck groups
            var optionGroup = document.createElement('optgroup');
            optionGroup.label = options[i].name;

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
                name: stackNames[i],
                decks: stacks
            });
        }

        this.addOptions(options);


        // create an onchange event to switch selected deck
        this.elements.deckSelect.addEventListener('change', function(){
            
            var deckId = Number(interface.elements.deckSelect.value);
            this.selectDeck(deckId);

        }.bind(this));
    }

    Interface.prototype.selectDeck = function(deckId){

        // iterate through all current decks
        for(var i = 0; i < this.current.decks.length; i++){
            
            // if the selected deck matches 
            if(this.current.decks[i].id === deckId){
                this.current.deck = this.current.decks[i];
                this.current.cards = this.current.deck.cards;
                this.current.card = this.current.cards[0];
                this.current.totalCards = this.current.cards.length;

                this.selectCard()
            }
        }
    }

    Interface.prototype.selectCard = function(){

        // pop a card off of the deck 
        this.current.card = this.current.cards.pop();
        this.elements.frontText.innerText = this.current.card.front;
        this.elements.backText.innerText = this.current.card.back;
    }

    return Interface;
}());

// TEST
var api = new Api(devApi);
var interface = new Interface();