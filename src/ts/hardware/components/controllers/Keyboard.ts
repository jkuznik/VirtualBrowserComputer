import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";
import {Computer} from "../../../Computer";

export class Keyboard extends HardwareAbstractComponent {
    constructor(name: string, computer: Computer) {
        super(name, ComponentType.Keyboard, computer);
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType();
    }

    static async addComponent(computer: Computer): Promise<Keyboard | null> {
        const fields: FormFieldData[] = [
            { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New keyboard' }
        ];

        const dialog = new AddComponentDialog('Add keyboard', fields);
        const data = await dialog.open();

        if (!data) {
            return null;
        }
        return new Keyboard(data.name, computer);
    }
}