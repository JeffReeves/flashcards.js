/*
* This will be a rewrite using OOJS ideas
* Flashcards are made up of decks. 
* Decks contain a stack of cards.
* Each card has a front and a back.
* Each card can be correct, incorrect, or skipped.
* 
*/

var Flashcards = function(){

    var self = this;

    this.decks = [];

    // add new decks
    this.addDeck = function(title){

        self.decks.push({
            title: title,
            id: self.decks.length + 1,
            cards: []
        });
    };

    // add new cards to a deck 
    this.addCard = function(deckID, front, back){

        var cards = self.decks[deckID].cards;
        var id = cards.length + 1;

        cards.push({
                id: id,
                front: front, 
                back: back,
                viewed: false,
                correct: false,
                skipped: false
        });
    };
};

var flashcards = new Flashcards;
flashcards.addDeck('CH1 - Command Line');
flashcards.addDeck('CH2 - Package Managers');
flashcards.addDeck('CH2 - Libraries');
flashcards.addDeck('CH2 - Processes');

flashcards.addCard(0, 'Where is the file that stores bash history?', '~/.bash_history');