import {Computer} from "./Computer";

import {loadHardwareMenu} from "./hardware/hardwareMenu";
import {loadSoftwareMenu} from "./software/softwareMenu";

export interface MenuButton {
  label: string;
  onClick: () => void;
}

export function loadMainMenu(computer: Computer): void {
  refreshButtonVisibility([
    { label: "Hardware", onClick: () => loadHardwareMenu(computer) },
    { label: "Software", onClick: () => loadSoftwareMenu(computer) },
  ]);
}

export function refreshButtonVisibility(buttons: MenuButton[]): void {
  let app = document.getElementById('app');

  if (!app) {
    console.error("Critical: #app container not found! Re-creating in document.body.");
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
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
