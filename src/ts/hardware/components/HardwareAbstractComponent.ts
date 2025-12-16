import {Computer} from "../../Computer";
import {loadHardwareMenu} from "../hardwareMenu";

export interface ComponentAction {
  name: string;
  action: () => void;
}

export abstract class HardwareAbstractComponent {

  private id: number = 0;
  protected computer: Computer;

  protected name: string;
  protected type: string;
  protected active: boolean = false;

  protected actions: ComponentAction[] = [];

  protected constructor(name: string, type: string, computer: Computer) {
    this.name = name;
    this.type = type;
    this.computer = computer;

    this.actions = [
      {name: 'Set Active', action: () => {
        this.activate(true);
        loadHardwareMenu(computer);
        }}
    ]
  }

  getInfo(): string {
    throw new Error("Each component class have to override this method");
  }

  addComponent(): HardwareAbstractComponent {
    throw new Error("Each component class have to override this method");
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  isActive(): boolean {
    return this.active;
  }

  activate(active: boolean) {
    this.computer.getComponents().forEach(component => {
      if (component.getType() === this.type && component.isActive()) {
        component.deactivate();
      }
    })
    this.active = active;
    return this;
  }

  deactivate(): void {
    this.active = false;
  }

  getActions(): ComponentAction[] {
    return this.actions;
  }
}
