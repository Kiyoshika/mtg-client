export class CardArena {
    constructor(numTotalCards, setNumTotalCardsCallback) {
        this.cardArrayMap = {};
        this.numTotalCards = numTotalCards;
        this.setNumTotalCardsCallback = setNumTotalCardsCallback;
    }

    addCardArray = (type, cardArray) => {
        this.cardArrayMap[type] = cardArray;
    }

    getCardArray = (type) => {
        return this.cardArrayMap[type];
    }

    getCards = (type) => {
        return this.getCardArray(type).getCards();
    }

    getCardQty = (type) => {
        return this.getCardArray(type).getQty();
    }

    addCard = (card) => {
        this.setNumTotalCardsCallback(this.numTotalCards + 1);
        this.getCardArray(card.type).incrementCard(card);
    }

    removeCard = (card) => {
        if (this.numTotalCards > 0)
            this.setNumTotalCardsCallback(this.numTotalCards - 1);
        this.getCardArray(card.type).decrementCard(card);
    }
}