// loads flashcards

// specify elements to hold front and back of flash cards
var front = document.getElementById('front');
var back = document.getElementById('back');

// specify the deck selected
var deckSelected = 0;

// get the total number of cards in the deck
var numCards = decks[deckSelected].cards.length;
// generate a random number between 0 and the total number in the deck
var randomCard = Math.floor(Math.random() * (numCards - 1));

console.log('random card: ', randomCard);

// place the contents of the random card within the front and back elements
front.innerText = decks[deckSelected].cards[randomCard].front;
back.innerText = decks[deckSelected].cards[randomCard].back;