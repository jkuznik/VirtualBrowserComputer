import {HardwareAbstractComponent} from "../HardwareAbstractComponent";

export class SSD extends HardwareAbstractComponent {

  static readonly TYPE: string = 'SSD Drive';

  private capacity: number;
  private storage: number = 0;

  constructor(name: string, capacity: number) {
    super(name, SSD.TYPE);
    this.capacity = capacity;
  }

  getCapacity() {
    return this.storage;
  }

  getStorage(): number {
    return this.storage;
  }

  getInfo(): string {
    return "Name: " + this.getName()
        + "\nType: " + this.getType()
        + "\nCapacity: " + this.getCapacity();
  }
}
