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
        this.user = this.loadUser(user);

        // stacks 
        this.user.stacks = this.loadStacks(stacks);

        // decks 
        // should be replaced by a for loop to get the decks for each stack
        this.user.stacks[0].decks = this.loadDecks(decks1); // deck 1
        this.user.stacks[1].decks = this.loadDecks(decks2); // deck 2

        // cards
        // should be replaced by a for loop to get cards for each deck,
        //     inside a for loop of each stack
        this.user.stacks[0].decks[0].cards = this.loadCards(cards1); // stack 1
        this.user.stacks[0].decks[1].cards = this.loadCards(cards2);
        this.user.stacks[0].decks[2].cards = this.loadCards(cards3);
        this.user.stacks[0].decks[3].cards = this.loadCards(cards4);
        
        this.user.stacks[1].decks[0].cards = this.loadCards(cards5); // stack 2

    }

    loadUser(user) {
        return new User(user.id, user.username, user.password)
    }

    loadStacks(stacks) {
        var s = [];
        for(let stack of stacks){
            s.push(new Stack(stack.userid, stack.id, stack.name));
        }
        return s;
    }

    loadDecks(decks) {
        var d = [];
        for(let deck of decks){
            d.push(new Deck(deck.stackid, deck.id, deck.title));
        }
        return d;
    }

    loadCards(cards) {
        var c = [];
        for(let card of cards){
            c.push(new Card(card.deckid, card.id, card.front, card.back, card.status));
        }
        return c;
    }

    loadDataPreformatted(user) {
        
        // data preformatted from API

        // user
        this.user = user;
    }
}