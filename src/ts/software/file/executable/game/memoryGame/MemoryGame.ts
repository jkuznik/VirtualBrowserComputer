import "../../../../../../css/games/memoryGame/styles.css";
import {AbstractFile} from "../../../AbstractFile";
import {FileType} from "../../../../FileType";
import {Card} from "./Card";
import {loadSoftwareMenu} from "../../../../softwareMenu";
import {Computer} from "../../../../../Computer";
import {loadSystemMenu} from "../../../../systemMenu";

export class MemoryGame extends AbstractFile {

    static readonly NAME = "MemoryGame";
    static readonly TYPE: FileType = FileType.EXE;
    static readonly SIZE = 256;

    private appContainer: HTMLElement;

    private boardElement: HTMLDivElement | null = null;
    private cards: Card[] = [];
    private flippedCards: Card[] = [];
    private matchesFound: number = 0;
    private gameSize: number = 16; // Liczba kart (musi być parzysta)
    private lockBoard: boolean = false;

    constructor(computer: Computer) {
        super(computer, MemoryGame.NAME, MemoryGame.TYPE, MemoryGame.SIZE);
    }

    run() {
        this.appContainer = document.getElementById('app-content') || document.body;
        this.appContainer.innerHTML = '';

        const title = document.createElement('h2');
        title.textContent = "Gra Memory (Wirtualny Terminal)";
        this.appContainer.appendChild(title);

        this.boardElement = document.createElement('div');
        this.boardElement.classList.add('memory-board');
        this.appContainer.appendChild(this.boardElement);

        this.initializeGame();
    }

    private initializeGame(): void {
        this.matchesFound = 0;
        this.flippedCards = [];
        this.lockBoard = false;
        this.cards = [];

        // Tworzenie par kart
        const cardIcons = ['🚀', '🍕', '💾', '💻', '💡', '⏰', '⭐', '🔥']; // 8 unikalnych ikon
        const pairs = [...cardIcons, ...cardIcons]; // Utwórz 8 par (16 kart)

        // Stworzenie obiektów Card
        this.cards = pairs.map((icon, index) => new Card(icon, index));

        // Losowe tasowanie kart (Fisher-Yates shuffle)
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

        this.renderBoard();
    }

    private renderBoard(): void {
        if (!this.boardElement) return;
        this.boardElement.innerHTML = ''; // Wyczyść planszę

        this.cards.forEach(card => {
            const cardEl = this.createCardElement(card);
            this.boardElement!.appendChild(cardEl);
        });
    }

    private createCardElement(card: Card): HTMLDivElement {
        const cardEl = document.createElement('div');
        cardEl.classList.add('memory-card');
        cardEl.dataset.id = String(card.id);

        const front = document.createElement('div');
        front.classList.add('card-face', 'card-front');
        front.textContent = '?'; // Domyślny rewers

        const back = document.createElement('div');
        back.classList.add('card-face', 'card-back');
        back.textContent = card.icon; // Ikonka na awersie

        cardEl.appendChild(front);
        cardEl.appendChild(back);

        // Ustawienie stanu wizualnego
        if (card.isFlipped) cardEl.classList.add('flipped');
        if (card.isMatched) cardEl.classList.add('matched');

        // Obsługa kliknięcia
        cardEl.addEventListener('click', () => this.handleCardClick(card));

        return cardEl;
    }

    private handleCardClick(clickedCard: Card): void {
        // Ignoruj kliknięcia, jeśli: plansza jest zablokowana, karta jest już odwrócona, lub już dopasowana
        if (this.lockBoard || clickedCard.isFlipped || clickedCard.isMatched) {
            return;
        }

        // 1. Odwróć klikniętą kartę
        clickedCard.isFlipped = true;
        const cardEl = this.boardElement!.querySelector(`[data-id="${clickedCard.id}"]`);
        if (cardEl) cardEl.classList.add('flipped');

        this.flippedCards.push(clickedCard);

        // 2. Sprawdź stan (czy mamy 2 odwrócone karty)
        if (this.flippedCards.length === 2) {
            this.lockBoard = true; // Zablokuj klikanie na czas sprawdzania
            this.checkForMatch();
        }
    }

    private checkForMatch(): void {
        const [card1, card2] = this.flippedCards;

        if (card1.icon === card2.icon) {
            // Pasujące karty
            card1.isMatched = true;
            card2.isMatched = true;
            this.matchesFound += 2;

            // Wizualne zaznaczenie dopasowania
            const el1 = this.boardElement!.querySelector(`[data-id="${card1.id}"]`);
            const el2 = this.boardElement!.querySelector(`[data-id="${card2.id}"]`);
            if (el1) el1.classList.add('matched');
            if (el2) el2.classList.add('matched');

            this.resetBoard();

            if (this.matchesFound === this.gameSize) {
                setTimeout(() => this.gameOver(), 500);
            }
        } else {
            // Niepasujące karty
            setTimeout(() => {
                // Odwrócenie kart z powrotem na rewers
                card1.isFlipped = false;
                card2.isFlipped = false;

                const el1 = this.boardElement!.querySelector(`[data-id="${card1.id}"]`);
                const el2 = this.boardElement!.querySelector(`[data-id="${card2.id}"]`);
                if (el1) el1.classList.remove('flipped');
                if (el2) el2.classList.remove('flipped');

                this.resetBoard();
            }, 1000); // 1 sekunda na zapamiętanie
        }
    }

    private resetBoard(): void {
        this.flippedCards = [];
        this.lockBoard = false;
    }

    // MemoryGame.gameOver()
    private gameOver(): void {
        alert("Gratulacje! Znalazłeś wszystkie pary!");

        this.appContainer.innerHTML = '';

        loadSystemMenu(this.computer);
    }
}