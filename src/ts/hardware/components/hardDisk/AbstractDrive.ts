import {HardwareAbstractComponent} from "../HardwareAbstractComponent";
import {Computer} from "../../../Computer";
import {ComponentType} from "../ComponentType";
import {AbstractFile} from "../../../software/file/AbstractFile";

export class AbstractDrive extends HardwareAbstractComponent {
    protected capacity: number = 0;
    protected storage: number = 0;

    protected files: AbstractFile[] = [];

    constructor(name: string, type: ComponentType, computer: Computer, capacity: number) {
        super(name, type, computer);
        this.capacity = capacity;
    }

    public addFile(file: AbstractFile) {
        this.files.push(file);
    }

    public removeFile(file: AbstractFile) {
        this.files.splice(this.files.indexOf(file), 1);
    }

    public getFiles(): AbstractFile[] {
        return this.files;
    }

    public runFile(file: AbstractFile) {
        this.files.forEach(installed => {
            if (installed === file) {
                installed.run()
            }
        })
    }
}