import {HDDDrive} from "./hardDisk/HDDDrive";
import {Mouse} from "./controllers/Mouse";
import {HardwareAbstractComponent} from "./HardwareAbstractComponent";

export class Computer {

    private components: HardwareAbstractComponent[] = [];

    addComponent(component: HardwareAbstractComponent) {
        this.components.push(component);
    }

    removeComponent(component: HardwareAbstractComponent) {
        this.components = this.components.filter(
            existedComponent => {
                return existedComponent.getName() !== component.getName();
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

    computer.addComponent(hdd);
    computer.addComponent(mouse);

    return computer;
}