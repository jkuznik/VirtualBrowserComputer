class HardwareAbstractComponent {
  constructor(name, type) {
    if (new.target === HardwareAbstractComponent) {
      throw new Error("HardwareAbstractComponent is abstract and cannot be instantiated directly");
    }

    this.name = name;
    this.type = type;
  }

  getName() {
    throw new Error("getName() must be implemented by subclass");
  }

  getType() {
    throw new Error("getType() must be implemented by subclass");
  }
}
