export interface MenuButton {
  label: string;
  onClick: () => void;
}

export function refreshButtonVisibility(buttons: MenuButton[]): void {
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
