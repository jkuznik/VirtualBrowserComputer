export class SSD extends HardwareAbstractComponent {

  static readonly TYPE: string = 'SSD Drive';

  private storage: number;

  constructor(name: string, storage: number) {
    super(name, SSD.TYPE);
    this.storage = storage;
  }

  getCapacity() {
    return this.storage;
  }
}
