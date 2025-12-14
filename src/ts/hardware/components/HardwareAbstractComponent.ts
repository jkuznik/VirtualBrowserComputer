export abstract class HardwareAbstractComponent {

  private id: number = 0;

  protected name: string;
  protected type: string;

  protected constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getInfo(): string {
    throw new Error("Each component have to override this method");
  }

  addComponent(): HardwareAbstractComponent {
    throw new Error("Each component have to override this method");
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }
}
