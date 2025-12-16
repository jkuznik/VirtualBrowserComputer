import {Computer} from "./Computer";
import {loadMainMenu} from "../menu";
import {HDDDrive} from "./components/hardDisk/HDDDrive";
import {ComponentTypeSelectDialog} from "./htmlElement/ComponentTypeSelectDialog";
import {ComponentType} from "./components/ComponentType";
import {SSDDrive} from "./components/hardDisk/SSDDrive";
import {Mouse} from "./components/controllers/Mouse";
import {Keyboard} from "./components/controllers/Keyboard";

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
        const singleComponentRow = document.createElement("div");
        singleComponentRow.classList.add('component-row');

        const name = document.createElement("span");
        name.classList.add('grid-text');
        name.textContent = component.getName();

        const type = document.createElement("span");
        type.classList.add('grid-text');
        type.textContent = component.getType();

        const showDetailsButton = document.createElement("button");
        showDetailsButton.classList.add('component-actions');
        showDetailsButton.textContent = "Details";
        showDetailsButton.addEventListener("click", (event) => {
            alert(component.getInfo());
        })

        const removeButton = document.createElement("button");
        removeButton.classList.add('component-actions');
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", (event) => {
            computer.removeComponent(component);
            listComponents(computer);
        })

        singleComponentRow.appendChild(name);
        singleComponentRow.appendChild(type);
        singleComponentRow.appendChild(showDetailsButton);
        singleComponentRow.appendChild(removeButton);

        grid.appendChild(singleComponentRow);
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
        new ComponentTypeSelectDialog().open().then(result => {
            switch (result) {
                case ComponentType.HDDDrive: {
                    computer.addComponent(HDDDrive.addComponent()).then(() => {
                        listComponents(computer);
                    }).catch(() => {}); // do nothing in case of promise rejected
                    break;
                }
                case ComponentType.SSDDrive: {
                    computer.addComponent(SSDDrive.addComponent()).then(() => {
                        listComponents(computer);
                    }).catch(() => {});
                    break;
                }
                case ComponentType.Mouse: {
                    computer.addComponent(Mouse.addComponent()).then(() => {
                        listComponents(computer);
                    }).catch(() => {});
                    break;
                }
                case ComponentType.Keyboard: {
                    computer.addComponent(Keyboard.addComponent()).then(() => {
                        listComponents(computer);
                    }).catch(() => {});
                }
            }
        })

    })

    const endMenu = document.createElement("div");
    endMenu.classList.add("right-element");
    endMenu.appendChild(addComponentButton);

    app.appendChild(topMenu);
    app.appendChild(grid)
    app.appendChild(endMenu);
}