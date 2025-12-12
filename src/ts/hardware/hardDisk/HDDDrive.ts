class HDDDrive extends HardwareAbstractComponent {

  static readonly TYPE: string = 'HDD Drive';

  private storage: number;

  constructor(name: string, storage: number) {
    super(name, HDDDrive.TYPE);
    this.storage = storage;
  }

  getStorage(): number {
    return this.storage;
  }
}
