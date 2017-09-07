import { User } from '../classes/user.js';
import { Stack } from '../classes/stack.js';
import { Deck } from '../classes/deck.js';
import { Card } from '../classes/card.js';

export class FlashcardsDataService {

    constructor() {
        this.user = {};
    }

    loadData(user, stacks, decks1, decks2, cards1, cards2, cards3, cards4, cards5) {
        
        // hardcoded data for now
        // eventually this data will be pulled from nested 
        //    asynchronous get requests that return promises

        // user
        this.user = user;

        // stacks 
        this.user.stacks = stacks;

        // decks 
        this.user.stacks[0].decks = decks1; // deck 1
        this.user.stacks[1].decks = decks2; // deck 2

        // cards
        this.user.stacks[0].decks[0].cards = cards1; // stack 1
        this.user.stacks[0].decks[1].cards = cards2;
        this.user.stacks[0].decks[2].cards = cards3;
        this.user.stacks[0].decks[3].cards = cards4;
        
        this.user.stacks[1].decks[0].cards = cards5; // stack 2

    }

    loadDataPreformatted(user) {
        
        // data preformatted from API

        // user
        this.user = user;
    }
}