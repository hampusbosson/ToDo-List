import { createFilledPriroitySelector } from "./todoUI";
import { createButton, createValueInputElement } from "./UIhelper";
import { editTodoAndDetails } from "./homepage";

function renderEditModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('edit-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('edit-modal-container');

    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function renderEditPage(todo, index) {
    const editForm = document.createElement('form'); 
    editForm.id = 'edit-page'; 
    editForm.classList.add('edit-page'); 

    const editContent = document.createElement('div');
    editContent.id = 'edit-c' + index; 
    editContent.classList.add('edit-content');

    const closebuttonContainer = document.createElement('div'); 
    closebuttonContainer.classList.add('close-button-container');

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('edit-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeEditModal(); 
    });

    closebuttonContainer.appendChild(closeButton);

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-todo-inputs'); 

    upperInputs.append(
        createValueInputElement('text', 'edit-title-input', 'title', `${todo.title}`, 'input'),
        createValueInputElement('text', 'edit-details-input', 'details', `${todo.details}`, 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-todo-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        createValueInputElement('date', 'edit-date', 'edit-date', `${todo.date}`)
    ); 


    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = createFilledPriroitySelector(todo.priority); 
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
        createButton('button', 'CONFIRM EDIT', 'confirm-edit-button', () => {
            editTodoAndDetails(index); 
            closeEditModal(); 
        }) 
    );
    
    editContent.append(upperInputs, lowerInputs); 
    editForm.appendChild(editContent); 

    const modalContent = document.querySelector('.edit-modal-container'); 
    modalContent.append(closebuttonContainer, editForm); 

    editContent.style.display = 'flex'; 
}


function closeEditModal() {
    const modal = document.querySelector('.edit-modal'); 
    modal.style.display = 'none';

    const modalContent = document.querySelector('.edit-modal-container');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openEditModal() {
    const modal = renderEditModal(); 
    modal.style.display = 'flex'; 
    return modal; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.edit-modal');
    if (event.target === modal) {
        closeEditModal(); 
    }
});

function showEditModal(todo, index) {
    let modal = document.querySelector('.edit-modal');
    if (!modal) {
        openEditModal(); 
    } else {
        modal.style.display = 'flex';
    }

    renderEditPage(todo, index);
}

export { showEditModal }; 
