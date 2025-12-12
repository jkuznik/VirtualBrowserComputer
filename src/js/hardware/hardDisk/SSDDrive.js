class SSD extends HardwareComponent {
  constructor(name, type, capacity) {
    super(name, "SSD Drive");
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
