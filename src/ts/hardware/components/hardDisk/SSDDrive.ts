import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";
import {ComponentType} from "../ComponentType";

export class SSDDrive extends HardwareAbstractComponent {
  private capacity: number;
  private storage: number = 0;

  constructor(name: string, capacity: number) {
    super(name, ComponentType.SSDDrive);
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  getStorage(): number {
    return this.storage;
  }

  getInfo(): string {
    return "Name: " + this.getName()
        + "\nType: " + this.getType()
        + "\nCapacity: " + this.getCapacity()
        + "\nActual Storage: " + this.getStorage();
  }
  static async addComponent(): Promise<SSDDrive | null> {
    const fields: FormFieldData[] = [
      { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New disk' },
      { key: 'capacity', label: 'Capacity (GB)', type: 'number', defaultValue: 500 }
    ];

    const dialog = new AddComponentDialog('Add HDD Disk', fields);
    const data = await dialog.open();

    if (!data) {
      return null;
    }

    const capacity = parseInt(data.capacity, 10);
    if (isNaN(capacity) || capacity <= 0) {
      alert("Value have to be positive.");
      return null;
    }
    return new SSDDrive(data.name, capacity);
  }
}
