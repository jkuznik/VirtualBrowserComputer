import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {ComponentType} from "../ComponentType";

export class Keyboard extends HardwareAbstractComponent {
    constructor(name: string) {
        super(name, ComponentType.Keyboard);
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType();
    }
}