import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {AddComponentDialog, FormFieldData} from "../AddComponentDialog";

export class HDDDrive extends HardwareAbstractComponent {

  static readonly TYPE: string = 'HDD Drive';

  private capacity: number;
  private storage: number = 0;

  constructor(name: string, capacity: number) {
    super(name, HDDDrive.TYPE);
    this.capacity = capacity;
  }

  getCapacity(): number {
    return this.capacity;
  }

  getStorage(): number {
    return this.storage;
  }

  getInfo(): string {
    return "Name: " + this.getName()
        + "\nType: " + this.getType()
        + "\nCapacity: " + this.getCapacity()
        + "\nActual Storage: " + this.getStorage();
  }

  static async addComponent(): Promise<HDDDrive | null> {

    // 1. Definicja pól wymaganych przez konstruktor
    const fields: FormFieldData[] = [
      { key: 'name', label: 'Nazwa dysku', type: 'string', defaultValue: 'Nowy Dysk' },
      { key: 'capacity', label: 'Pojemność (GB)', type: 'number', defaultValue: 500 }
    ];

    // 2. Utworzenie i otwarcie dialogu
    const dialog = new AddComponentDialog('Dodaj Dysk HDD', fields);
    const data = await dialog.open(); // Oczekiwanie na wynik z Modala

    if (!data) {
      return null; // Anulowano
    }

    // 3. Logika tworzenia obiektu z zebranych danych
    const capacity = parseInt(data.capacity, 10);

    // Ostateczna walidacja typu danych (zabezpieczenie przed błędem z inputa text)
    if (isNaN(capacity) || capacity <= 0) {
      alert("Błąd: Pojemność musi być liczbą dodatnią.");
      return null;
    }

    // 4. Utworzenie i zwrócenie nowego komponentu
    return new HDDDrive(data.name, capacity);
  }
}
