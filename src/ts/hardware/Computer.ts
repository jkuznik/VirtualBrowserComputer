import {HDDDrive} from "./hardDisk/HDDDrive";
import {Mouse} from "./controllers/Mouse";
import {HardwareAbstractComponent} from "./HardwareAbstractComponent";
import {Keyboard} from "./controllers/Keyboard";

export class Computer {

    private components: HardwareAbstractComponent[] = [];

    addComponent(component: HardwareAbstractComponent) {
        const actualId = this.components.length + 1;
        component.setId(actualId);
        this.components.push(component);
    }

    removeComponent(component: HardwareAbstractComponent) {
        this.components = this.components.filter(
            existedComponent => {
                return existedComponent.getId() !== component.getId();
            }
        )
    }

    getComponents():  HardwareAbstractComponent[] {
        return this.components;
    }
}

export function initialComputer(): Computer {
    const computer  = new Computer();

    const hdd = new HDDDrive("Seagate Barracuda", 500);
    const mouse = new Mouse("LogiTech", 8000);
    const keyboard = new Keyboard("LogiTech");

    computer.addComponent(hdd);
    computer.addComponent(mouse);
    computer.addComponent(keyboard);

    return computer;
}