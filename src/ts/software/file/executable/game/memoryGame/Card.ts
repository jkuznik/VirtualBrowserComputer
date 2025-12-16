// Znajdź odpowiednią lokalizację dla tego pliku w Twoim projekcie

export class Card {
    readonly id: number;
    readonly icon: string;

    public isFlipped: boolean = false;
    public isMatched: boolean = false;

    constructor(icon: string, id: number) {
        this.icon = icon;
        this.id = id;
    }
}