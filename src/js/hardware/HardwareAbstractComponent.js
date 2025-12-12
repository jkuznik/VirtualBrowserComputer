class HardwareAbstractComponent {
  constructor(name, manufacturer) {
    if (new.target === HardwareAbstractComponent) {
      throw new Error("HardwareAbstractComponent is abstract and cannot be instantiated directly");
    }

    this.name = name;
    this.manufacturer = manufacturer;
  }

  getName() {
    throw new Error("getName() must be implemented by subclass");
  }

  getType() {
    throw new Error("getType() must be implemented by subclass");
  }
}
