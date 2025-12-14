export interface FormFieldData {
    key: string;
    label: string;
    type: 'string' | 'number';
    defaultValue: any;
}

export class AddComponentDialog {

    private title: string;
    private fields: FormFieldData[];

    constructor(title: string, fields: FormFieldData[]) {
        this.title = title;
        this.fields = fields;
    }

    public open(): Promise<Record<string, any> | null> {
        return new Promise<any>((resolve, reject) => {
            const dialogContainer = document.createElement('div');
            dialogContainer.classList.add('add-component-dialog');

            const formDialog = document.createElement('div');
            formDialog.classList.add('modal-content');
            formDialog.innerHTML = `<h2>${this.title}</h2>`;

            const form = document.createElement('form');
            form.className = 'add-component-form';
            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const formData: Record<string, any> = {};
                let isValid = true;

                this.fields.forEach(field => {
                    const input = form.querySelector(`#${field.key}`) as HTMLInputElement;
                    formData[field.key] = input.value;

                    if (!input.value && input.required) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    alert('All fields required');
                    return;
                }

                removeModal();
                resolve(formData);
            })

            this.fields.forEach(field => {

                const label = document.createElement('label');
                label.htmlFor = field.key;
                label.textContent = field.label + ':';
                const input = document.createElement('input');

                input.type = field.type === 'number' ? 'number' : 'text';
                input.id = field.key;
                input.name = field.key;
                input.value = field.defaultValue !== undefined ? String(field.defaultValue) : '';
                input.required = true;

                form.appendChild(label);
                form.appendChild(input);
                form.appendChild(document.createElement('br'));
            });

            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.id = 'submit-component';
            submitButton.textContent = 'Save';

            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.id = 'cancel-component';
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', (event) => {
                removeModal()
                reject();
            })

            form.appendChild(submitButton);
            form.appendChild(cancelButton);
            formDialog.appendChild(form);
            dialogContainer.appendChild(formDialog);

            document.body.appendChild(dialogContainer);
            const removeModal = () => { document.body.removeChild(dialogContainer); };
        })
    }
}
