import { User } from '../classes/user.js';
import { Stack } from '../classes/stack.js';
import { Deck } from '../classes/deck.js';
import { Card } from '../classes/card.js';

export class FlashcardsDataService {

    constructor() {
        this.user = {};
        this.stacks = [];
        this.decks = [];
        this.cards = [];
    }

    loadData(users, stacks, decks, cards) {

        // users
        for(let data of users) {
            this.user.push(data);
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

    loadData2(usersArray, stacksArray, decksArray, cardsArray) {

        // cards already come grouped into decks
        // decks already come grouped into stacks
        // stacks already come as an array for one user
        // the user comes as a single item array with the user

        // user
        for(let users of usersArray) {
            for(let user of users) {
                this.user.id = user.id;
                this.user.username = user.username;
                // create an empty stacks array for the user
                this.user.stacks = [];
            }
        }

        // stacks
        for(let stacks of stacksArray) {
            for(let stack of stacks) {
                this.stacks.push(stack);
                // add each stack to the user's stacks
                this.user.stacks.push(stack);
            }
        }

        // create an empty decks array on the user's stacks
        for(let i = 0; i < this.user.stacks.length; i++){
            this.user.stacks[i].decks = [];
        }

        // decks
        for(let decks of decksArray) {
            for(let deck of decks) {

                this.decks.push(deck);

                // iterate over stacks
                for(let i = 0; i < this.user.stacks.length; i++){
                    // if the deck belongs to the stack
                    if(this.user.stacks[i].id === deck.stackid){
                        // add that deck to the stack
                        this.user.stacks[i].decks.push(deck);
                    }
                }
            }
        }

        // create an empty cards array on the user's decks
        for(let i = 0; i < this.user.stacks.length; i++){
            for(let j = 0; j < this.user.stacks[i].decks.length; j++){
                this.user.stacks[i].decks[j].cards = [];
            }
        }

        // cards
        for(let cards of cardsArray) {
            for(let card of cards) {

                this.cards.push(card);

                // iterate over stacks
                for(let i = 0; i < this.user.stacks.length; i++){
                    // iterate over decks
                    for(let j = 0; j < this.user.stacks[i].decks.length; j++){
                        // if the deck belongs to the stack
                        if(this.user.stacks[i].id === this.user.stacks[i].decks[j].stackid) {
                            // and the card belongs to the deck
                            if(this.user.stacks[i].decks[j].id === card.deckid){
                                // add that card to that deck
                                this.user.stacks[i].decks[j].cards.push(card);
                            }
                        }
                    }
                }
            }
        }

        // nest user <- stacks <- decks <- cards
        // user <- stacks
    }
}