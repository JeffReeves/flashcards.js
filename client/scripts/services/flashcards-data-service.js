import { User } from '../classes/user.js';
import { Deck } from '../classes/deck.js';
import { Card } from '../classes/card.js';

export class FlashcardsDataService {

    constructor() {
        this.users = [];
        this.stacks = [];
        this.decks = [];
        this.cards = [];
    }

    loadData(users, stacks, decks, cards) {

        // users
        for(let data of users) {
            this.users.push(data);
        }

        // stacks
        for(let data of stacks) {
            this.stacks.push(data);
        }

        // decks
        for(let data of decks) {
            this.decks.push(data);
        }

        // cards
        for(let data of cards) {
            this.cards.push(data);
        }
    }
}