import { createPrioritySelector } from "./todoUI";
import { createInputElement, createButton } from "./UIhelper";
import { addNewTodo } from "./homepage";

function renderAddTaskPage() {
    const addTaskPage = document.createElement('form'); 
    addTaskPage.id = 'add-task-page'; 
    addTaskPage.classList.add('page'); 

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');


    const closebuttonContainer = document.createElement('div'); 
    closebuttonContainer.classList.add('close-button-container');

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('edit-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeAddTaskModal(); 
    });

    closebuttonContainer.appendChild(closeButton);

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-task-inputs'); 

    upperInputs.append(
        createInputElement('text', 'task-title-input', 'title', 'Title: Pay Bills', 'input'),
        createInputElement('text', 'task-details-input', 'details', 'Details: eg internet, phone, rent.', 'input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-task-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        createInputElement('date', 'task-date', 'date')
    ); 

    const priorityBox = document.createElement('div'); 
    priorityBox.classList.add('priority-box');

    const prioritySelector = createPrioritySelector(); 
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
        createButton('button', 'ADD TASK', 'add-task-button', () => {
            addNewTodo();
            closeAddTaskModal(); 
        })
    );

    taskContent.append(upperInputs, lowerInputs); 
    addTaskPage.appendChild(taskContent);

    const modalContent = document.querySelector('.task-modal-container'); 
    modalContent.append(closebuttonContainer, addTaskPage); 

    addTaskPage.style.display = 'flex'; 
}

function renderAddTaskModal() {
    const addTaskModal = document.createElement('div'); 
    addTaskModal.classList.add('add-task-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('task-modal-container');


    addTaskModal.appendChild(modalContainer);

    document.body.appendChild(addTaskModal); 

    return addTaskModal; 
}

function closeAddTaskModal() {
    const addTaskModal = document.querySelector('.add-task-modal'); // Adjust selector as needed
    addTaskModal.style.display = 'none';

    const modalContent = document.querySelector('.task-modal-container');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openAddTaskModal() {
    const addTaskModal = renderAddTaskModal(); 
    addTaskModal.style.display = 'block'; 
}

function clearAddTaskModalContent() {
    // Reset text inputs
    const taskContent = document.querySelector('.upper-task-inputs');
    const taskInputs = taskContent ? taskContent.querySelectorAll('input') : []; 

    taskInputs.forEach(input => {
        input.value = ''; 
    }); 

    // Reset date input
    const dateInput = document.getElementById('date'); 
    dateInput.value = ''; 

    // Reset priority buttons
    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor;   // Reset to original background
    });
}

window.addEventListener('click', function(event) {
    const addTaskModal = document.querySelector('.add-task-modal');
    if (event.target === addTaskModal) {
        closeAddTaskModal(); 
        //clearAddTaskModalContent(); 
    }
});

function showAddTaskModal() {
    let addTaskModal = document.querySelector('.add-task-modal');
    if (!addTaskModal) {
        openAddTaskModal(); 
        renderAddTaskPage();
    } else {
        renderAddTaskPage();
        addTaskModal.style.display = 'block';
    }
}

export { showAddTaskModal, closeAddTaskModal }; 