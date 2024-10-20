export default class CardInfo {
    constructor(type, name, description, mana, power, toughness, imageURL) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.mana = mana;
        this.power = power;
        this.toughness = toughness;
        this.imageURL = imageURL;
    }

    getType = () => { return this.type; }
    getName = () => { return this.name; }
    getDescription = () => { return this.description; }
    getMana = () => { return this.mana; }
    getPower = () => { return this.power; }
    getToughness = () => { return this.toughness; }
    getImageURL = () => { return this.imageURL; }
}