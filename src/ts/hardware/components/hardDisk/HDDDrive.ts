
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";
import {ComponentType} from "../ComponentType";
import {Computer} from "../../../Computer";
import {AbstractDrive} from "./AbstractDrive";

export class HDDDrive extends AbstractDrive {
  constructor(name: string, computer: Computer, capacity: number) {
    super(name, ComponentType.HDDDrive, computer, capacity);
  }

  getCapacity(): number {
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

  static async addComponent(computer: Computer): Promise<HDDDrive | null> {
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
    return new HDDDrive(data.name, computer, capacity);
  }
}
