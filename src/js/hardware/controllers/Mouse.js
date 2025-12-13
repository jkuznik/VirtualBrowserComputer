class Mouse extends HardwareComponent {
  constructor(name, type, dpi) {
    super(name, type);
    this.dpi = dpi;
  }

  getDpi() {
    return this.dpi;
  }
}
