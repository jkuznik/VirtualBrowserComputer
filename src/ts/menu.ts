import {Computer} from "./hardware/Computer";

export interface MenuButton {
  label: string;
  onClick: () => void;
}

export function loadMainMenu(computer: Computer): void {
  refreshButtonVisibility([
    { label: "Hardware", onClick: () => loadHardwareMenu(computer) },
    { label: "Software", onClick: () => alert("Software Menu is not implemented yet") }
  ]);
}

function loadHardwareMenu(computer: Computer): void {
  refreshButtonVisibility([
    { label: "List Components", onClick: () => listComponents(computer) },
    { label: "Component Details", onClick: () => alert("Details — TODO") },
    { label: "Add Component", onClick: () => alert("Add — TODO") },
    { label: "Remove Component", onClick: () => alert("Remove — TODO") },
    { label: "Back", onClick: () =>  loadMainMenu(computer) }
  ]);
}

function listComponents(computer: Computer) {
  const app = document.getElementById('app');
  const componentsDiv = document.createElement("div");
  computer.getComponents().forEach(component => {

        const element = document.createElement("li");
        element.textContent = component.getName();

        componentsDiv.appendChild(element);
    })

  app?.appendChild(componentsDiv)
}

function refreshButtonVisibility(buttons: MenuButton[]): void {
  const app = document.getElementById('app');
  if (!app) {
    throw new Error('No #app container found');
  }

  app.innerHTML = '';

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttons-container');

  buttons.forEach(button => {
    const newButton = document.createElement('button');

    newButton.textContent = button.label;
    newButton.addEventListener('click', button.onClick);

    buttonContainer.appendChild(newButton);
  })

  app.appendChild(buttonContainer);
}
