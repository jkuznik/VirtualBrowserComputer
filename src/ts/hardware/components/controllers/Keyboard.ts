import {HardwareAbstractComponent} from "../HardwareAbstractComponent";

export class Keyboard extends HardwareAbstractComponent {

    static readonly TYPE = "Keyboard";

    constructor(name: string) {
        super(name, Keyboard.TYPE);
    }

    getInfo(): string {
        return "Name: " + this.getName()
            + "\nType: " + this.getType();
    }
}