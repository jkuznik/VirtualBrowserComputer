import {Computer} from "./Computer";
import {HardwareAbstractComponent} from "./HardwareAbstractComponent";
import {loadMainMenu} from "../menu";
import {HDDDrive} from "./hardDisk/HDDDrive";

export function listComponents(computer: Computer) {
    const app = document.getElementById('app');

    if (!app) {
        return;
    } else {
        app.innerHTML = '';
    }

    const grid = document.createElement("div");
    grid.classList.add('components-grid');

    computer.getComponents().forEach(component => {
        const name = document.createElement("div");
        name.classList.add('component-name');
        name.textContent = component.getName();

        const showDetailsButton = document.createElement("button");
        showDetailsButton.classList.add('component-actions');
        showDetailsButton.textContent = "Details";
        showDetailsButton.addEventListener("click", (event) => {
            alert('Name; ' + component.getName() +
                'Type: ' + component.getType() );
        })

        const removeButton = document.createElement("button");
        removeButton.classList.add('component-actions');
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", (event) => {
            computer.removeComponent(component);
            listComponents(computer);
        })

        grid.appendChild(name);
        grid.appendChild(showDetailsButton);
        grid.appendChild(removeButton);
    })

    const backToMainMenuButton = document.createElement("button");
    backToMainMenuButton.textContent = "Back to Main Menu";
    backToMainMenuButton.addEventListener("click", (event) => {
        loadMainMenu(computer);
    })

    const topMenu = document.createElement("div");
    topMenu.classList.add("center-element");
    topMenu.appendChild(backToMainMenuButton);

    const addComponentButton = document.createElement("button");
    addComponentButton.textContent = "Add Component";
    addComponentButton.addEventListener("click", (event) => {
        if (confirm('Add hardcoded HDD Drive?')) {
            computer.addComponent(new HDDDrive('Hardcoded', 100))
            listComponents(computer);
        }
    })

    const endMenu = document.createElement("div");
    endMenu.classList.add("right-element");
    endMenu.appendChild(addComponentButton);

    app.appendChild(topMenu);
    app.appendChild(grid)
    app.appendChild(endMenu);
}