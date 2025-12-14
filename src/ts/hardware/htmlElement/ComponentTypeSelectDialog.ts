import {ComponentType} from "../components/ComponentType";

export class ComponentTypeSelectDialog {

    private supportedComponentsType: ComponentType[] = Object.values(ComponentType) as ComponentType[];

    public open(): Promise<ComponentType | null> {

        let removeModal: () => void;

        return new Promise<ComponentType | null>((resolve) => {

            const dialogContainer = document.createElement('div');
            dialogContainer.classList.add('component-select-dialog');

            const content = document.createElement('div');
            content.classList.add('select-modal-content');

            const title = document.createElement('h2');
            title.textContent = 'Select Component Type';
            content.appendChild(title);

            const selector = document.createElement('select');
            selector.classList.add('component-selector');

            this.supportedComponentsType.forEach((componentType) => {
                const option = document.createElement('option');
                option.value = componentType;
                option.text = componentType.toString().replace(/_/g, ' ');

                selector.appendChild(option);
            });

            if (this.supportedComponentsType.length > 0) {
                selector.value = this.supportedComponentsType[0];
            }

            const selectButton = document.createElement('button');
            selectButton.textContent = 'Select';
            selectButton.addEventListener('click', (event) => {
                removeModal();
                resolve(selector.value as ComponentType);
            });

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', (event) => {
                removeModal();
                resolve(null);
            });

            content.appendChild(selector);
            content.appendChild(selectButton);
            content.appendChild(cancelButton);

            dialogContainer.appendChild(content);
            document.body.appendChild(dialogContainer);

            removeModal = () => {
                if (document.body.contains(dialogContainer)) {
                    document.body.removeChild(dialogContainer);
                }
            };
        });
    }
}