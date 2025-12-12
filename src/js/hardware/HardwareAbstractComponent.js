class HardwareAbstractComponent {
  constructor(name, type) {
    if (new.target === HardwareAbstractComponent) {
      throw new Error("HardwareAbstractComponent is abstract and cannot be instantiated directly");
    }

    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
