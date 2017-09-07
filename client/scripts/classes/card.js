export class Card {
    
    constructor(deckId, id, front, back, status){
        this.deckId = deckId;
        this.id = id;
        this.front = front;
        this.back = back;
        this.status = status || null;
    }
}