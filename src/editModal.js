import { createPriroitySelector } from "./todoUI";
import { createInputElement, hideAllPages, createButton } from "./UIhelper";

function renderEditModal(todo, index) {
    const modal = document.createElement('div'); 
    modal.classList.add('edit-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('edit-modal-container');

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('edit-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeEditModal(); 
    });

    modalContainer.appendChild(closeButton);
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function renderEditPage(todo) {
    const editForm = document.createElement('form'); 
    editForm.id = 'edit-page'; 
    editForm.classList.add('edit-page'); 

    const editContent = document.createElement('div');
    editContent.classList.add('edit-content');

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-todo-inputs'); 

    upperInputs.append(
        createInputElement('text', 'edit-title-input', 'title', `Title`, 'input'),
        createInputElement('text', 'edit-details-input', 'details', `Details`, 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-todo-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        createInputElement('date', 'edit-date', 'edit-date')
    ); 

    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = createPriroitySelector(); 
    const priorityLabel = document.createElement('label'); 
    priorityLabel.textContent = 'Priority: '; 

    priorityBox.append(
        priorityLabel,
        prioritySelector
    )

    const dateAndPriorityBox = document.createElement('div'); 
    dateAndPriorityBox.classList.add('date-and-priority'); 

    dateAndPriorityBox.append(
        dateInput,
        priorityBox
    );

    lowerInputs.append(
        dateAndPriorityBox,
        createButton('button', 'CONFIRM EDIT', 'confirm-edit-button')
    );
    
    editContent.append(upperInputs, lowerInputs); 
    editForm.appendChild(editContent); 

    const modalContent = document.querySelector('.edit-modal-container'); 
    modalContent.appendChild(editForm); 

    editContent.style.display = 'flex'; 
}

function closeEditModal() {
    const modal = document.querySelector('.edit-modal'); 
    modal.style.display = 'none';

    const modalContent = document.querySelector('.edit-details');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openEditModal(todo) {
    const modal = renderEditModal(todo); 
    modal.style.display = 'flex'; 
    return modal; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.details-modal');
    if (event.target === modal) {
        closeEditModal(); 
    }
});

function showEditModal(todo) {
    let modal = document.querySelector('.details-modal');
    if (!modal) {
        openEditModal(); 
    } else {
        modal.style.display = 'flex';
    }

    renderEditPage(todo);
}

export { showEditModal }; 
