class HDDDrive extends HardwareAbstractComponent {
  constructor(name, type, storage) {
    super(name, "HDD Drive");
    this.storage = storage;
  }

  getStorage() {
    return this.storage;
  }
}
