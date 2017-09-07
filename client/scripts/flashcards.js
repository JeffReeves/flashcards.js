// classes
import { User } from './classes/user.js';
import { Stack } from './classes/stack.js';
import { Deck } from './classes/deck.js';
import { Card } from './classes/card.js';

// services 
import { FlashcardsDataService } from './services/flashcards-data-service.js';

// data (hardcoded example for now)
import { user } from './example-data.js';
import { stacks } from './example-data.js';
import { decks1 } from './example-data.js';
import { decks2 } from './example-data.js';
import { cards1 } from './example-data.js';
import { cards2 } from './example-data.js';
import { cards3 } from './example-data.js';
import { cards4 } from './example-data.js';
import { cards5 } from './example-data.js';

import { exampleDataSorted } from './example-data-presorted.js';

// start data service
let dataService = new FlashcardsDataService();
let dataService2 = new FlashcardsDataService();

// load the data into the dataService object
dataService.loadData(user, stacks, decks1, decks2, cards1, cards2, cards3, cards4, cards5);
dataService2.loadDataPreformatted(exampleDataSorted);

console.log('dataService', dataService);
console.log('dataService2', dataService2);