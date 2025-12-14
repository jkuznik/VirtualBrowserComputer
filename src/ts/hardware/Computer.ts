import {HDDDrive} from "./components/hardDisk/HDDDrive";
import {Mouse} from "./components/controllers/Mouse";
import {HardwareAbstractComponent} from "./components/HardwareAbstractComponent";
import {Keyboard} from "./components/controllers/Keyboard";

export class Computer {

    private components: HardwareAbstractComponent[] = [];

    async addComponent(promise: Promise<HardwareAbstractComponent | null>) {
        let component = await promise;

        if (component === null) {
            throw  new Error("Fail to add new component");
        }

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

export async function initialComputer(): Promise<Computer> {
    const computer  = new Computer();

    const hdd = new HDDDrive("Seagate Barracuda", 500);
    const mouse = new Mouse("LogiTech", 8000);
    const keyboard = new Keyboard("LogiTech");

    await computer.addComponent(Promise.resolve(hdd));
    await computer.addComponent(Promise.resolve(mouse));
    await computer.addComponent(Promise.resolve(keyboard));

    return computer;
}