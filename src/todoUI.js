import { createInputElement, hideAllPages } from "./UIhelper";

function createPriroitySelector() {
    const prioritySelector = document.createElement('div'); 
    prioritySelector.id = 'priority-selector'; 

    const priorities = [
        { name: 'LOW', color: 'green' },
        { name: 'MEDIUM', color: 'orange'},
        { name: 'HIGH', color: 'red' }
    ]; 

    priorities.forEach((priority) => {
        const button = createPriorityButton(priority); 
        prioritySelector.appendChild(button);
    });

    return prioritySelector; 
}


function createPriorityButton(priority) {
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.classList.add('priority-button');
    button.style.border = `1px solid ${priority.color}`;
    button.style.color = priority.color;
    button.textContent = priority.name; 
    button.id = priority.name; 
    button.dataset.priority = priority.name.toLowerCase(); 

    button.addEventListener('click', () => {
        // Remove 'selected' class and reset style for all buttons
        document.querySelectorAll('.priority-button').forEach(btn => {
            btn.classList.remove('selected');
            btn.style.backgroundColor = '';
            btn.style.color = btn.dataset.priorityColor;   // Reset to original background
        });
    
        // Add 'selected' class and change style for the clicked button
        button.classList.add('selected');
        button.style.backgroundColor = priority.color;
        button.style.color = 'white';  // Set your desired color
    });

    //store the original color in a data attribute for each button
    button.dataset.priorityColor = priority.color; 

    return button; 
}

function renderToDoPage() {
    const todoPage = document.createElement('div'); 
    todoPage.id = 'todo-page'; 
    todoPage.classList.add('page'); 

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    const upperInputs = document.createElement('div');
    upperInputs.classList.add('upper-todo-inputs'); 

    upperInputs.append(
        createInputElement('text', 'title', 'title', 'Title: Pay Bills', 'title-input'),
        createInputElement('text', 'details', 'details', 'Details: eg internet, phone, rent.', 'details-input')
    );

    const lowerInputs = document.createElement('div'); 
    lowerInputs.classList.add('lower-todo-inputs'); 

    const dateInput = document.createElement('div'); 
    dateInput.classList.add('date-box');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:'; 

    dateInput.append(
        dateLabel,
        createInputElement('date', 'date', 'date')
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

    const addToDoButton = document.createElement('button');
    addToDoButton.classList.add('add-todo');
    addToDoButton.textContent = 'ADD TO DO'; 

    lowerInputs.append(
        dateAndPriorityBox,
        addToDoButton
    );
    

    todoContent.append(upperInputs, lowerInputs); 
    todoPage.appendChild(todoContent);

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(todoPage); 

    todoPage.style.display = 'block'; 
}

function showToDoPage() {
    hideAllPages(); 
    let todoPage = document.getElementById('todo-page');
    if (!todoPage) {
        renderToDoPage(); 
    } else {
        todoPage.style.display = 'block';
    }
}

export default showToDoPage; 