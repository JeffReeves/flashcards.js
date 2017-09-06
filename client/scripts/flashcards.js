// classes
import { User } from './classes/user.js';
import { Deck } from './classes/deck.js';
import { Card } from './classes/card.js';

// services 
import { FlashcardsDataService } from './services/flashcards-data-service.js';

// data
import { exampleUsers } from './example-data.js';
import { exampleStacks } from './example-data.js';
import { exampleDecks } from './example-data.js';
import { exampleCards } from './example-data.js';

// start data service
let dataService = new FlashcardsDataService();
dataService.loadData(exampleUsers, exampleStacks, exampleDecks, exampleCards);

console.log(dataService);