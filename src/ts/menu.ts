import {Computer} from "./hardware/Computer";

import {listComponents} from "./hardware/hardwareMenu";

export interface MenuButton {
  label: string;
  onClick: () => void;
}

export function loadMainMenu(computer: Computer): void {
  refreshButtonVisibility([
    { label: "Hardware", onClick: () => listComponents(computer) },
    { label: "Software", onClick: () => alert("Software Menu is not implemented yet") }
  ]);
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
