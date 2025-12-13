export abstract class HardwareAbstractComponent {

  protected name: string;
  protected type: string;

  protected constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }
}
