import {HardwareAbstractComponent} from "./hardware/components/HardwareAbstractComponent";
import {HDDDrive} from "./hardware/components/hardDisk/HDDDrive";
import {Mouse} from "./hardware/components/controllers/Mouse";
import {Keyboard} from "./hardware/components/controllers/Keyboard";
import {Monitor} from "./hardware/components/monitor/Monitor";
import {MemoryGame} from "./software/file/executable/game/memoryGame/MemoryGame";

export class Computer {

    static readonly MAX_MONITORS: number = 3;

    private components: HardwareAbstractComponent[] = [];
    private currentMonitors: number = 0;

    async addComponent(promise: Promise<HardwareAbstractComponent | null>) {
        let component = await promise;

        if (component === null) {
            throw  new Error("Fail to add new component");
        }
        if (component instanceof Monitor) {
            if (this.currentMonitors === Computer.MAX_MONITORS) {
                alert("Computer already have max amount of monitors")
                return;
            } else {
                this.currentMonitors += 1;
            }
        }

        const actualId = this.components.length + 1;
        component.setId(actualId);
        this.components.push(component);
    }

    removeComponent(component: HardwareAbstractComponent) {
        if (component instanceof Monitor) {
            this.currentMonitors -= 1;
        }

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

    const monitor = new Monitor("", computer).activate(true);
    const hdd = new HDDDrive("Seagate Barracuda", computer, 500).activate(true);
    const mouse = new Mouse("LogiTech", computer, 8000).activate(true);
    const keyboard = new Keyboard("LogiTech", computer).activate(true);

    const memoryGame = new MemoryGame(computer);

    hdd.addFile(memoryGame);

    await computer.addComponent(Promise.resolve(monitor));
    await computer.addComponent(Promise.resolve(hdd));
    await computer.addComponent(Promise.resolve(mouse));
    await computer.addComponent(Promise.resolve(keyboard));

    return computer;
}