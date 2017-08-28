// 3rd party dependencies: jQuery v3.2.1, mui-0.9.22
// local dependencies: functions.js

const prodApi = 'https://alchemist.digital/flashcards/api/'; // PROD API
const devApi = '../test-api/'; // TEST API

var Api = (function(){

    function Api(url){
        this.url = url || devApi;
        this.user = this.url + 'users/';
        this.decks = this.url + 'decks/userid/';
        this.cards = this.url + 'cards/deckid/';
    }

    Api.prototype.getData = function(self, type, value, success, failure){

        var url;

        switch(type){
            case 'user':
                url = this.user + value;
                break;
            case 'decks':
                url = this.decks + value;
                break;
            case 'cards':
                url = this.cards + value;
            default:
                throw Error('[ERROR] value must be "user", "decks", or "cards"');
        }

        $.getJSON(url)
        .done(function(data){
            console.log('this: ', this);
            console.log('[DEBUG] getJSON success - data found: ', data);
            if(success){
                success(data);
            }
            this.id = data[0].id;
            return data;
        }.bind(self))       
        .fail(function() {
            console.log('[DEBUG] getJSON failed');
            if(failure){
                failure();
            }
            throw Error('[ERROR] getData failed');
        });  
    }

    return Api;
}());

var User = (function(){

    function User(username, readyCallback){
        this.username = username;
        this.id = 0;
        this.decks = [];

        this.onready = readyCallback;
    }

    User.prototype.getUserId = function(){
        console.log('[1] This in user.proto.getUserId: ', this);
        api.getData(this, 'user', this.username, function(data){
            console.log('[4] This in user getData: ', this);
            this.result = data;
        }.bind(this)); // window object without bind
    } 

    User.prototype.getDecks = function(userId){
        $.getJSON(api.decks + userId, function(response) {
            for(var i = 0; i < response.length; i++){
                this.decks.push(new Deck(response[i]));
            }
        }.bind(this));
    }

    return User;
}());

var Deck = (function(){
    
    function Deck(obj){
        this.title = obj.title;
        this.id = obj.id || null;
        this.group = obj.group;
        this.cards = [];

        this.getCards(this.id);
    }

    Deck.prototype.getCards = function(deckId){
        $.getJSON(api.cards + deckId, function(response) {
            for(var i = 0; i < response.length; i++){
                this.cards.push(new Card(response[i]));
            }
        }.bind(this));
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

    var _element = document.createElement('div');
    _element.id = 'loginModal'

    var _options = {
        'keyboard': true, 
        'static': false, 
        'onclose': function() {
                console.log('modal closed');
            } 
        };
    
    function Modal(){
        this.overlay = {};
    }

    Modal.prototype.open = function(){
        mui.overlay('on', _options, _element);
    }

    Modal.prototype.close = function(){
        mui.overlay('off');
    }
    
    return Modal;
}());

var Interface = (function(){
    
    function Interface(){

        this.elements = {
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

    Interface.prototype.userLogin = function(user){

        // user details
        this.current.username = user.username;
        this.current.userId = user.id;

        // deck details
        this.current.decks = user.decks;
    }

    Interface.prototype.addOptions = function(options){
    // options = [{name: '', decks: [{id: 0, title: ''}]}]

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

        var self = this;
        var decks = self.current.decks;  
        var groupsNames = [];
        var options = []; 

        // iterate through each deck
        for(var i = 0; i < decks.length; i++){

            // add the group to the list if it's not there already
            if(groupsNames.indexOf(decks[i].group) === -1){
                groupsNames.push(decks[i].group);
            }
        }

        // iterate through each group on the group list
        for(var i = 0; i < groupsNames.length; i++){

            var deckGroups = [];

            // and each deck
            for(var j = 0; j < decks.length; j++){

                var deck = {
                    id: 0,
                    title: ''
                };

                if(groupsNames[i] === decks[j].group){
                    deck.id = decks[j].id;
                    deck.title = decks[j].title;

                    deckGroups.push(deck);
                }
            }

            // add the name and titles to the options list
            options.push({
                name: groupsNames[i],
                decks: deckGroups
            });
        }

        this.addOptions(options);


        // create an onchange event to switch selected deck
        this.elements.deckSelect.addEventListener('change', function(){
           console.log(this.value);
        });
    }

    return Interface;
}());

// TEST
var modal = new Modal();
var api = new Api(devApi);
var interface = new Interface();
//var user = new User('jeff'); // will eventually create user based on input into login modal