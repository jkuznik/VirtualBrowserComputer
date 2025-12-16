import {FileType} from "../FileType";
import {Computer} from "../../Computer";

export abstract class AbstractFile {

    protected computer: Computer;

    protected name: string;
    protected type: FileType;
    protected size: number;

    protected constructor(computer: Computer, name: string, type: FileType, size: number) {
        this.computer = computer;
        this.name = name;
        this.type = type;
        this.size = size;
    }

    getName(): string {
        return this.name;
    }

    getType(): FileType {
        return this.type;
    }

    getSize(): number {
        return this.size;
    }

    run() {
        throw new Error("Each file class have to override this method");
    }
}