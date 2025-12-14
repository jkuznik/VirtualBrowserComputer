import {HardwareAbstractComponent} from "../HardwareAbstractComponent";

export class Mouse extends HardwareAbstractComponent {

  static readonly TYPE: string = 'Mouse';

  private dpi: number;

  constructor(name: string, dpi: number) {
    super(name, Mouse.TYPE);
    this.dpi = dpi;
  }

  getDpi() {
    return this.dpi;
  }

  getInfo(): string {
    return "Name: " + this.getName()
        + "\nType: " + this.getType()
        + "\nDPI: " + this.getDpi();
  }
}
