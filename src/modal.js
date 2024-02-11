import { showToDoPage } from "./todoUI";
import showProjectPage from "./projectUI";
import { showNotePage } from "./noteUI";
import { createButton, isVisible } from "./UIhelper";

function createModalHeader(modal) {
    const modalHeader = document.createElement('div'); 
    modalHeader.classList.add('modal-header'); 
    modalHeader.textContent = 'Create a new...'; 

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('close'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; 
        clearModalContent();
    });

    modalHeader.appendChild(closeButton); 

    return modalHeader; 
}

function createModalSidebar() {
    const modalSidebar = document.createElement('div'); 
    modalSidebar.classList.add('modal-sidebar'); 

    const sidebarOptions = document.createElement('div'); 
    sidebarOptions.classList.add('modal-sidebar-options');
    sidebarOptions.append(
        createButton('li', 'To Do', 'modal-button', () => showToDoPage()),
        createButton('li', 'Project',  'modal-button', () => showProjectPage()),
        createButton('li', 'Note',  'modal-button', () => showNotePage())
    ); 

    modalSidebar.appendChild(sidebarOptions); 

    return modalSidebar; 
}

function renderModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('modal-container');

    const modalHeader = createModalHeader(modal);
    const modalSideBar = createModalSidebar(); 

    const modalContent = document.createElement('div'); 
    modalContent.classList.add('modal-content'); 

    const modalText = document.createElement('p'); 
    modalText.classList.add('modal-text'); 

    modalContent.append(modalSideBar, modalText)

    modalContainer.append(modalHeader, modalContent);  
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function closeModal() {
    const modal = document.querySelector('.modal');
    const projectModal = document.querySelector('.add-task-modal');
    
    if (isVisible(modal)) {
        modal.style.display = 'none';
    } else if (isVisible(projectModal)) {
        projectModal.style.display = 'none';
    }
    
}

function openModal() {
    const modal = renderModal(); 
    modal.style.display = 'block'; 
}

function clearModalContent() {
    //reset text inputs
    const projectContent = document.querySelector('.project-page');
    const todoContent = document.querySelector('.upper-todo-inputs');
    const noteContent = document.querySelector('.note-upper'); 
    
    const projectInputs = projectContent ? projectContent.querySelectorAll('input') : []; 
    const todoInputs = todoContent ? todoContent.querySelectorAll('input') : []; 
    const noteInputs = noteContent ? noteContent.querySelectorAll('input') : []; 

    const allInputs = Array.from(projectInputs).concat(Array.from(todoInputs), Array.from(noteInputs));

    allInputs.forEach(input => {
        input.value = ''; 
    }); 

    //reset date input
    const dateInput = document.getElementById('date'); 
    dateInput.value = ''; 

    //reset priority buttons
    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor;   // Reset to original background
    });
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        closeModal(); 
        clearModalContent(); 
    }
});

function showModal() {
    let modal = document.querySelector('.modal');
    if (!modal) {
        openModal(); 
        showToDoPage();
    } else {
        showToDoPage();
        modal.style.display = 'block';
    }
}

export { showModal, closeModal }; 