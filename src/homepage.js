import { createButton, hideAllHomePages, createIconButton } from "./UIhelper";
import { Todo, TodoList } from "./todoLogic";
import { closeModal } from "./modal";

const todoList = new TodoList(); 



function renderTodoBox() {
    const todoBox = document.createElement('div');
    todoBox.classList.add('todo-box'); 

    let homepage = document.querySelector('.home-page');

    // If homepage is in view, append only the latest todo
    if (homepage && todoList.todos.length > 0) {
        const latestTodo = todoList.todos[todoList.todos.length - 1];
        const todoElement = createTodoElement(latestTodo);
        todoBox.appendChild(todoElement);
    } else {
        // If homepage is not in view, append the entire list
        todoList.todos.forEach(todo => {
            const todoElement = createTodoElement(todo);
            todoBox.appendChild(todoElement);
        });
    }
    
    return todoBox; 
}


function createTodoElement(todo) {
    const todoElement = document.createElement('div');
    todoElement.textContent = `Title: ${todo.title}, Details: ${todo.details}, Date: ${todo.date}, Priority: ${todo.priority}`;
    return todoElement;
}

function temporaryTodoBox() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('home-page'); 
    homepage.id = 'homepage-container'; 

    const homepageContent = document.createElement('div'); 
    homepageContent.classList.add('homepage-content'); 

    const homepageTitle = document.createElement('div'); 
    homepageTitle.classList.add('page-title'); 
    homepageTitle.textContent = '🏠 Home';


    const todoBox = renderTodoBox();
    const todo = new Todo('Title', 'some details here blah blah blah', '1999-10-16', 'MEDIUM');
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');
    
    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cbtest-19';
    
    // Create the label
    const label = document.createElement('label');
    label.setAttribute('for', 'cbtest-19');
    label.classList.add('check-box');
    
    // Append the checkbox and label to the wrapper
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
 

    const detailsButton = createButton('button', 'DETAILS', 'details-button'); 
    const editButton = createIconButton('button', 'edit-button'); 
    const deleteButton = createIconButton('button', 'delete-button'); 

    const leftItems = document.createElement('div'); 
    leftItems.classList.add('left-bar'); 
    const rightItems = document.createElement('div'); 
    rightItems.classList.add('right-bar'); 
    const rightButtons = document.createElement('div')
    rightButtons.classList.add('right-buttons'); 


    leftItems.append(checkboxWrapper, todo.title); 
    rightButtons.append(editButton, deleteButton);
    rightItems.append(detailsButton, todo.date, rightButtons); 
    todoBox.append(leftItems, rightItems); 

    homepageContent.append(homepageTitle, todoBox); 
    
    homepage.appendChild(homepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}

/*function renderHomePage() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('home-page'); 
    homepage.id = 'homepage-container'; 

    const todoBox = renderTodoBox();
    const todo = new Todo('Title', 'some details here blah blah blah', '1999-10-16', 'MEDIUM')
    todoBox.append(todo.title); 
    
    homepage.appendChild(todoBox); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}
*/


function addNewTodo() {
    event.preventDefault();

    // Get values from input fields
    const title = document.getElementById('title-input').value;
    const details = document.getElementById('details-input').value;
    const date = document.getElementById('date').value;
    const priority = getSelectedPriority(); 

    const newTodo = new Todo(title, details, date, priority);
    todoList.addTodo(newTodo);

    document.getElementById('title-input').value = '';
    document.getElementById('details-input').value = '';
    document.getElementById('date').value = '';

    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor; 
    });

    // Update the homepage to display the new todo
    updateTodoBox(); 
    //close modal after adding
    closeModal(); 
}

function updateTodoBox() {
    const homepage = document.querySelector('.home-page');
    
    if (homepage) {
        // Create a new todoBox and append it to the homepage
        const newTodoBox = renderTodoBox();
        homepage.appendChild(newTodoBox);
    }
}

function getSelectedPriority() {
    const priority = document.querySelector('.selected'); 
    return priority.textContent; 
}

function showHomePage() {
    hideAllHomePages(); 
    let homepage = document.querySelector('.home-page');
    if (!homepage) {
        temporaryTodoBox(); 
    } else {
        homepage.style.display = 'block';
    }
}

export { showHomePage, addNewTodo }; 