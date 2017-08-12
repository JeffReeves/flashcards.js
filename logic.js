// GLOBAL FUNCTIONS 

// Fisher-Yates (aka Knuth) Shuffle
// Courtesy of https://bost.ocks.org/mike/shuffle/
var shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle...
  while (m) {

    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


// GLOBAL VARIABLES 
var currentDeck = 0;
var currentCards = [];
var currentCard = {};


// GET ALL PAGE ELEMENTS

// flashcards
var flashcardContainer = document.getElementById('flashcard-container');
var flashcard = document.getElementById('flashcard');
var front = document.getElementById('front');
var back = document.getElementById('back');
var frontText = front.getElementsByTagName('p')[0];
var backText = back.getElementsByTagName('p')[0];

// dropdown to select decks
var deckSelect = document.getElementById('deck-select');

// buttons
var correctButton = document.getElementById('correct');
var incorrectButton = document.getElementById('incorrect');
var skipButton = document.getElementById('skip');


// LOAD DECKS DROPDOWN

var loadDecks = function(){

    // iterate through each deck
    for(var i = 0; i < decks.length; i++){

        // create a new option element with necessary values
        var option = document.createElement('option');
        option.setAttribute('value', decks[i].id);
        option.text = decks[i].title;

        // append it to the select dropdown
        deckSelect.appendChild(option);
    }
};

// create an onchange event to switch selected deck
deckSelect.addEventListener('change', function(){

    // back up currently selected deck
    decks[currentDeck].cards = currentCards;

    var deckID = this.value;
    
    // shuffle the new deck and load the first card from it
    shuffleDeck(deckID);
    loadFlashcards();
});


// shuffles flashcard deck
var shuffleDeck = function(deck){

    // specify the deck selected
    var deckID = deck;

    // randomize the order of the cards to prevent cheap memorization
    var cards = shuffle(decks[deckID].cards);

    currentCards = cards;
};

var loadFlashcards = function(){

    // remove the first element from the array of current cards and 
    // load it into the current card
    currentCard = currentCards.shift();

    // place the contents of the random card within the front and back elements
    frontText.innerText = currentCard.front;
    backText.innerText = currentCard.back;
};


// add class to flip the flashcard over when hovered over
// add event for mouse enter
flashcardContainer.addEventListener("mouseover", function(){

    // add class to flip card
    flashcard.className = 'flipped';
});

// add event for mouse exit
flashcardContainer.addEventListener("mouseout", function(){

    // remove class to unflip
    flashcard.removeAttribute('class');
});


// add events for button presses
correctButton.addEventListener("click", function(){

    // mark the current card as correct
    decks[currentDeck].cards[currentCard.id].correct = true;

    // increment the number of cards correct in the deck 
    decks[currentDeck].numberCorrect++;

    // load a new card
    loadFlashcards();
});

incorrectButton.addEventListener("click", function(){

    // mark the current card as incorrect
    decks[currentDeck].cards[currentCard.id].incorrect = true;

    // increment the number of cards incorrect in the deck 
    decks[currentDeck].numberIncorrect++;

    // add card back to the end of the array so we can try again later
    currentCards.push(currentCard);

    // load a new card
    loadFlashcards();
});

skipButton.addEventListener("click", function(){

    // mark the current card as skipped
    decks[currentDeck].cards[currentCard.id].skipped = true;

    // add card back to the end of the array so we can try again later
    currentCards.push(currentCard);

    // load a new card
    loadFlashcards();

});



// MAIN 

loadDecks();
shuffleDeck(0);
loadFlashcards();