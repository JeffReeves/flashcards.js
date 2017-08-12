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

    var deckSelected = this.value;
    
    // DEBUG
    console.log('selected deck: ', this.value);
    
    loadFlashcard(deckSelected);
});


// LOAD FLASHCARDS
var loadFlashcard = function(deck){

    // specify the deck selected
    var deckSelected = deck;

    // DEBUG
    console.log('deck selected: ', deckSelected);

    // get the total number of cards in the deck
    var numCards = decks[deckSelected].cards.length;
    // generate a random number between 0 and the total number in the deck
    var randomCard = Math.floor(Math.random() * (numCards - 1));

    // DEBUG
    console.log('random card: ', randomCard);

    // place the contents of the random card within the front and back elements
    frontText.innerText = decks[deckSelected].cards[randomCard].front;
    backText.innerText = decks[deckSelected].cards[randomCard].back;
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


// MAIN 

loadDecks();
loadFlashcard(0);