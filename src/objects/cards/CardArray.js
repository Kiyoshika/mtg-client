export default class CardArray {
    constructor(numCards, setNumCardsCallback, cardArray, setCardArrayCallback) {
        this.numCards = numCards;
        this.setNumCardsCallback = setNumCardsCallback;
        this.cardArray = cardArray;
        this.setCardArrayCallback = setCardArrayCallback;
    }

    getQty = () => {
        return this.numCards;
    }

    getCards = () => {
        return this.cardArray;
    }

    incrementCard = (card) => {
        card.qty += 1;
        this.setNumCardsCallback(card.qty);

        if (this.cardArray.indexOf(card) === -1)
            this.cardArray.push(card);

        this.setCardArrayCallback([...this.cardArray]);
    }

    decrementCard = (card) => {
        card.qty -= 1;
        this.setNumCardsCallback(card.qty);
        if (card.qty <= 0) {
            let cardIdx = this.cardArray.indexOf(card);
            this.cardArray.splice(cardIdx, 1);
        }
        this.setCardArrayCallback([...this.cardArray]);
    }
}