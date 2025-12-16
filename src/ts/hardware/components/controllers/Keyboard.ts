import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";

export class Keyboard extends HardwareAbstractComponent {
    constructor(name: string) {
        super(name, ComponentType.Keyboard);
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType();
    }

    static async addComponent(): Promise<Keyboard | null> {
        const fields: FormFieldData[] = [
            { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New keyboard' }
        ];

        const dialog = new AddComponentDialog('Add keyboard', fields);
        const data = await dialog.open();

        if (!data) {
            return null;
        }
        return new Keyboard(data.name);
    }
}