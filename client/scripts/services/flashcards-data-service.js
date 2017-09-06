import { User } from './classes/user.js';
import { Deck } from './classes/deck.js';
import { Card } from './classes/card.js';

export class FlashcardsDataService {

    constructor() {
        this.decks = [];
        this.cards = [];
    }
}