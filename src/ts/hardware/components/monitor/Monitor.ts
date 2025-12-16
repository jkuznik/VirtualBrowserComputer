import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";
import {AddComponentDialog, FormFieldData} from "../../htmlElement/AddComponentDialog";
import {Computer} from "../../../Computer";

export class Monitor extends HardwareAbstractComponent {

    private width: number = 1280;
    private height: number = 720;

    constructor(name: string, computer: Computer) {
        super(name, ComponentType.Monitor, computer);

        this.actions.push(
            {
                name: 'ON',
                action: () => {
                    if (this.isActive()) {
                        this.setTheme('light'); // Ustawiamy motyw ciemny
                    }
                }
            });
        this.actions.push({
                name: 'OFF',
                action: () => {
                    if (this.isActive()) {

                        this.setTheme('dark'); // Ustawiamy motyw jasny
                    }
                }
            });
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType()
            + "\nCurrent resolution: " + this.getResolution();
    }

    static async addComponent(computer: Computer): Promise<Monitor | null> {
        const fields: FormFieldData[] = [
            { key: 'name', label: 'Component name', type: 'string', defaultValue: 'New monitor' },
        ];

        const dialog = new AddComponentDialog('Add mouse', fields);
        const data = await dialog.open();

        if (!data) {
            return null;
        }
        return new Monitor(data.name, computer);
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

    private setTheme(themeType: 'light' | 'dark'): void {
        const body = document.body;

        if (themeType === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            console.log("Theme set to LIGHT.");
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            console.log("Theme set to DARK.");
        }
    }
}