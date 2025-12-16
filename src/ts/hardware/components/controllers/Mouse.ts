import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";
import {Computer} from "../../../Computer";

export class Mouse extends HardwareAbstractComponent {
  private dpi: number;

  constructor(name: string, computer: Computer, dpi: number) {
    super(name, ComponentType.Mouse, computer);
    this.dpi = dpi;

    this.actions.push(
      {
        name: 'RIGHT_CLICK',
        action: () => {
          if (this.isActive()) {
            this.simulateClick('RIGHT'); // Symulacja Prawego Kliknięcia
          }
        }
      });
    this.actions.push({
        name: 'LEFT_CLICK',
        action: () => {
          if (this.isActive()) {
            this.simulateClick('LEFT'); // Symulacja Lewego Kliknięcia
          }
        }
      })
  }

  getDpi() {
    return this.dpi;
  }

  getInfo(): string {
    return "Name: " + this.getName()
        + "\nType: " + this.getType()
        + "\nDPI: " + this.getDpi();
  }

  static async addComponent(computer: Computer): Promise<Mouse | null> {
    const fields: FormFieldData[] = [
      { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New mouse' },
      { key: 'dpi', label: 'DPI', type: 'number', defaultValue: 8000 }
    ];

    const dialog = new AddComponentDialog('Add mouse', fields);
    const data = await dialog.open();

    if (!data) {
      return null;
    }

    const dpi = parseInt(data.dpi, 10);
    if (isNaN(dpi) || dpi <= 0) {
      alert("Value have to be positive.");
      return null;
    }
    return new Mouse(data.name, computer, dpi);
  }

  private simulateClick(button: 'LEFT' | 'RIGHT'): void {
    const componentName = this.getName();
    alert(`${componentName} triggered: ${button} Click!`);
  }
}
