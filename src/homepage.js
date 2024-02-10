import { hideAllHomePages,
    createButton, 
    createIconButton, 
    getCurrentProjectPageIndex,
    deleteTodoElements,
    deleteTodoElementInToday,
    deleteTodoElementInWeek,
    updateExistingTodoBox,
    getSelectedPriority } from "./UIhelper";
import { Todo, TodoList } from "./todoLogic";
import { closeModal } from "./modal";
import { format, isToday, isThisISOWeek } from "date-fns";
import { getProjectList } from "./projectpage";
import { showDetailsModal } from "./detailsModal";
import { showEditModal } from "./editModal";

const todoList = new TodoList(); 

function updateTodoBox() {
    const homepageContent = document.querySelector('.homepage-todo-content');
    
    if (homepageContent) {
        // Create a new todoBox and append it to the homepage
        const newTodoBox = renderTodoBox();
        homepageContent.prepend(newTodoBox);
    }
}

function updateTodoBoxInProject(index) {
    const projectContent = document.querySelector('#individual-project-page' + index);
    const grandchild = projectContent.querySelector('.i-project-content .i-project-container .project-todo-content');

    if (projectContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox();
        grandchild.prepend(newTodoBox);
    }
}

function updateTodoBoxInToday() {
    const todayContent = document.querySelector('#todaypage-container');
    const grandchild = todayContent.querySelector('.todaypage-content .todaypage-todo-content');

    if (todayContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox();
        grandchild.prepend(newTodoBox);
    }
}


function updateTodoBoxInWeek() {
    const thisweekContent = document.querySelector('#thisweekpage-container');
    const grandchild = thisweekContent.querySelector('.thisweekpage-content .thisweekpage-todo-content');

    if (thisweekContent) {
        // Create a new todoBox and append it to the projectpage
        const newTodoBox = renderTodoBox();
        grandchild.prepend(newTodoBox);
    }
}


function renderTodoBox() {
    const todoBox = document.createElement('div');
    todoBox.classList.add('todo-box'); 

    let homepage = document.querySelector('#homepage-container');

    // If homepage is in view, append only the latest todo
    if (homepage && todoList.todos.length > 0) { 
        const index = todoList.todos.length - 1;
        const latestTodo = todoList.todos[todoList.todos.length - 1];
        const todoElement = createTodoElement(latestTodo, index);
        todoBox.appendChild(todoElement);
    } else {
        // If homepage is not in view, append the entire list
        todoList.todos.forEach((todo, index) => {
            const todoElement = createTodoElement(todo, index);
            todoBox.appendChild(todoElement);
        });
    }
    
    return todoBox; 
}


function createTodoElement(todo, index) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-element');
    todoElement.setAttribute('data-index', index); 

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');
    
    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('data-checkbox-index', index);
    const checkboxID = 'cbtest-19';
    checkbox.id = checkboxID; 
    checkbox.classList.add('todo-checkbox'); // Added 'checkbox' for selection
    
    // Create the label
    const label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('data-checkbox-index', index);
    
    
    // Append the checkbox and label to the wrapper
    checkboxWrapper.append(checkbox, label);
    
    const dateText = document.createElement('div'); 
    dateText.classList.add('date-text'); 
    dateText.append(todo.formatDate); 

    const detailsButton = createButton('button', 'DETAILS', 'details-button', () => {
        showDetailsModal(todoList.todos[index]);
    }); 

    const editButton = createIconButton('button', 'edit-button', () => {
        showEditModal(todoList.todos[index], index);
    }); 

    const deleteButton = createIconButton('button', 'delete-button', () => {
        deleteTodoElements(index);
    }); 

    const leftItems = document.createElement('div'); 
    leftItems.classList.add('left-bar'); 
    const rightItems = document.createElement('div'); 
    rightItems.classList.add('right-bar'); 
    const rightButtons = document.createElement('div')
    rightButtons.classList.add('right-buttons'); 

    const todoTitle = document.createElement('div');
    todoTitle.textContent = todo.title; 
    todoTitle.classList.add('todo-title');

    leftItems.append(checkboxWrapper, todoTitle); 
    rightButtons.append(editButton, deleteButton);
    rightItems.append(detailsButton, dateText, rightButtons); 
    todoElement.append(leftItems, rightItems); 

    return todoElement;
}


function editTodoAndDetails(index) {
    event.preventDefault(); 
    // Retrieve the edit form content first to get the new values
    const editContent = document.getElementById('edit-c' + index);
    const newTitle = editContent.querySelector('#edit-title-input').value; 
    let newDate = editContent.querySelector('#edit-date').value.trim(); 
    const formattedNewDate = format(new Date(newDate), "LLL do");
    const newDetails = editContent.querySelector('#edit-details-input').value; 
    const priority = editContent.querySelector('.selected'); 
    const newPriority = priority.textContent; 

    // Update the todo item in TodoList
    todoList.todos[index]
        .changeTitle(newTitle)
        .changeDate(newDate)
        .changeDetails(newDetails)
        .changePriority(newPriority);
        

    if (isToday(newDate)) {
        const existingTodoBox = document.querySelector(`#todaypage-container .todo-element[data-index="${index}"]`);
        if (existingTodoBox) {
            // Update the existing todo box
            updateExistingTodoBox(existingTodoBox, newTitle, formattedNewDate, newDetails, newPriority);
        } else {
            // Add a new todo box to 'todaypage'
            updateTodoBoxInToday();
        }
    } else {
        deleteTodoElementInToday(index);
    }

    if (isThisISOWeek(newDate)) {
        const existingTodoBox = document.querySelector(`#thisweekpage-container .todo-element[data-index="${index}"]`);
        if (existingTodoBox) {
            // Update the existing todo box
            updateExistingTodoBox(existingTodoBox, newTitle, formattedNewDate, newDetails, newPriority);
        } else {
            // Add a new todo box to 'todaypage'
            updateTodoBoxInWeek();
        }
    } else {
        deleteTodoElementInWeek(index);
    } 

    // Update the DOM elements for the todo item display
    const todoBoxes = document.querySelectorAll(`[data-index="${index}"]`);

    todoBoxes.forEach(todoBox => {
        const titleElement = todoBox.querySelector('.todo-title');
        const dateElement = todoBox.querySelector('.date-text');
    
        if (titleElement) {
            titleElement.textContent = newTitle;
        }
    
        if (dateElement) {
            const formattedDate = format(new Date(newDate), "LLL do");
            dateElement.textContent = formattedDate;
        }

    });
}

function renderHomePage() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('main-pages'); 
    homepage.id = 'homepage-container'; 

    const homepageContent = document.createElement('div'); 
    homepageContent.classList.add('homepage-content'); 

    const homepageTodos = document.createElement('div'); 
    homepageTodos.classList.add('homepage-todo-content');

    const homepageTitle = document.createElement('div'); 
    homepageTitle.classList.add('page-title'); 
    homepageTitle.textContent = '🏠 All Tasks';

    homepageContent.append(homepageTitle, homepageTodos); 
    
    homepage.appendChild(homepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}


function addNewTodo() {
    event.preventDefault();

    const addTaskModal = document.querySelector('#add-task-page'); 

    // Get values from input fields
    let title = document.getElementById('title-input').value;
    let details = document.getElementById('details-input').value;
    let date = document.getElementById('date').value;
    let project = 'Home'; 
    if (addTaskModal) {
        date = document.getElementById('task-date').value; 
        title = document.getElementById('task-title-input').value; 
        details = document.getElementById('task-details-input').value;
        const projectPageIndex = getCurrentProjectPageIndex(); 
        project = getProjectList().getTitleOfIndex(projectPageIndex);
    } 

    const priority = getSelectedPriority(); 

    const newTodo = new Todo(title, details, date, priority, project);
    if (!todoList.doesTitleExist(newTodo)) {
        todoList.addTodo(newTodo);
    } else {
        // Handle the case where the title already exists
        alert (`A todo with the title "${newTodo.title}" already exists.`);
        return;
    }

    document.getElementById('title-input').value = '';
    document.getElementById('details-input').value = '';
    document.getElementById('date').value = '';

    document.querySelectorAll('.priority-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.color = btn.dataset.priorityColor; 
    });

    if (addTaskModal) {
        let projectList = getProjectList(); 
        let index = projectList.getIndexOfTitle(project); 

        console.log(index); 

        updateTodoBoxInProject(index); 
    }

    if (isToday(newTodo.date)) {
        updateTodoBoxInToday();
    }

    if (isThisISOWeek(newTodo.date)) {
        updateTodoBoxInWeek();
    } 
    
    
    // Update the homepage to display the new todo
    updateTodoBox(); 
    //close modal after adding
    closeModal(); 
}

document.body.addEventListener('click', function(event) {
    if (event.target.matches('.todo-checkbox')) {
        const index = event.target.getAttribute('data-checkbox-index');
        // Toggle completion state for todo items with the same index
        document.querySelectorAll(`.todo-element[data-index="${index}"]`).forEach(todoElement => {
            const todoTitle = todoElement.querySelector('.todo-title');
            if (todoTitle) {
                todoTitle.classList.toggle('todo-title-completed');
            }
            todoElement.classList.toggle('todo-element-completed');
        });
    }
});

function showHomePage() {
    hideAllHomePages(); 
    let homepage = document.querySelector('#homepage-container');
    if (!homepage) {
        renderHomePage(); 
    } else {
        homepage.style.display = 'block';
    }
}

export { showHomePage, addNewTodo, editTodoAndDetails }; 