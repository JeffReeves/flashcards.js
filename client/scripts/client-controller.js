// dependencies: jQuery v3.2.1, functions.js

//const _apiUrl = 'https://alchemist.digital/flashcards/api/'; // PROD API
const _apiUrl = '../test-api/'; // TEST API

var User = (function(){

    function User(username){
        this.username = username;
        this.id = 0;
        this.currentDeck = {};
        this.decks = [];

        // get user id from db
        this.getUserIdJSON(_apiUrl + 'users/' + this.username);
    }

    User.prototype.getUserIdJSON = function(url){
        var that = this;
        $.getJSON(url, function(response) {
            // set user id
            that.id = response[0].id;

            // get all decks that belong to that user id
            that.getDecksJSON(_apiUrl + 'decks/user/' + that.id);
            return that.id;
        });        
    }

    User.prototype.getDecksJSON = function(url){
        var that = this;
        $.getJSON(url, function(response) {

            for(var i = response.length; i--;){
                that.decks.push(new Deck(response[i]));
            }
            return that.decks.reverse();
        });
    }

    return User;
}());

var Deck = (function(){

    var _id = 1;
    
    function Deck(obj){
        this.title = obj.title;
        this.id = obj.id || _id++;
        this.cards = [];

        this.getCardsJSON(_apiUrl + 'cards/deckid/' + this.id);
    }

    Deck.prototype.getCardsJSON = function(url){
        var that = this;
        $.getJSON(url, function(response) {

            for(var i = response.length; i--;){
                that.cards.push(new Card(response[i]));
            }
            return that.cards.reverse();
        });
    }

    return Deck;
}());

var Card = (function(){

    var _id = 1;

    function Card(obj){
        this.front = obj.front;
        this.back = obj.back;
        this.id = obj.id || _id++;
    }

    return Card;
}());

// TEST
//var user = new User('jeff'); // will eventually create user based on input into login modal