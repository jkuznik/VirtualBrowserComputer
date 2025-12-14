import {HardwareAbstractComponent} from "../HardwareAbstractComponent";

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
}
