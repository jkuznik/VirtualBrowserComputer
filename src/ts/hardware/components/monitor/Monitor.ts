import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";

export class Monitor extends HardwareAbstractComponent {

    private width: number = 1280;
    private height: number = 720;

    constructor(name: string) {
        super(name, ComponentType.Monitor);
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType()
            + "\nCurrent resolution: " + this.getResolution();
    }

    static async addComponent(): Promise<Monitor | null> {
        const fields: FormFieldData[] = [
            { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New mouse' },
        ];

        const dialog = new AddComponentDialog('Add mouse', fields);
        const data = await dialog.open();

        if (!data) {
            return null;
        }
        return new Monitor(data.name);
    }

    getResolution(): string {
        return `${this.width}x${this.height}`;
    }

    setHeightResolution() {
        this.width = 1920;
        this.height = 1080;
        console.log(`Monitor ${this.getName()}: Resolution set to High (${this.getResolution()})`);
    }

    setLowResolution(): void {
        this.width = 1280;
        this.height = 720;
        console.log(`Monitor ${this.getName()}: Resolution set to Low (${this.getResolution()})`);
    }
}