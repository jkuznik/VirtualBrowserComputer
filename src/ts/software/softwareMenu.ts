import {Computer} from "../Computer";
import {refreshButtonVisibility} from "../menu";
import {loadSystemMenu} from "./systemMenu";


export function loadSoftwareMenu(computer: Computer): void {
    refreshButtonVisibility([
        { label: "System", onClick: () => loadSystemMenu(computer) },
        { label: "Install new app", onClick: () => alert("Not implemented yet") }
    ]);
}