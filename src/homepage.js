import { hideAllHomePages } from "./UIhelper";
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

function renderHomePage() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('home-page'); 
    homepage.id = 'homepage-container'; 

    const todoBox = renderTodoBox();
    
    homepage.appendChild(todoBox); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}



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
        renderHomePage(); 
    } else {
        homepage.style.display = 'block';
    }
}

export { showHomePage, addNewTodo }; 