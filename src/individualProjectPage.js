import { ProjectList } from "./todoLogic";
import { showAddTaskModal } from "./addTaskModal";
import { hideAllHomePages } from "./UIhelper";

function renderProject(project, index) {
    const individualProjectPage = document.createElement('div'); 
    individualProjectPage.classList.add('main-pages');
    individualProjectPage.id = 'individual-project-page' + index; 

    const content = document.createElement('div'); 
    content.classList.add('i-project-content');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('i-project-container');

    const todoContent = document.createElement('div'); 
    todoContent.classList.add('project-todo-content')
    
    projectContainer.append(todoContent, renderAddTodo()); 

    const titleText = document.createElement('div')
    titleText.classList.add('i-project-title'); 
    titleText.textContent = `Project:`; 

    const titleName = document.createElement('div'); 
    titleName.classList.add('project-title-name'); 
    titleName.textContent = project.title; 
    
    const titleContent = document.createElement('div'); 
    titleContent.classList.add('title-content');

    titleContent.append(titleText, titleName);

    content.append(titleContent, projectContainer); 
    individualProjectPage.appendChild(content);

    const mainProjectPage = document.querySelector('#projectpage-container'); 
    mainProjectPage.style.display = 'none';

    const body = document.querySelector('.body'); 
    body.appendChild(individualProjectPage); 

    individualProjectPage.style.display = 'block'; 
}

function renderAddTodo() {
    const addTodoBox = document.createElement('div'); 
    addTodoBox.classList.add('add-todo-box');
     
    const content = document.createElement('div');
    content.classList.add('add-todo-content');

    const plusSymbol = document.createElement('div'); 
    plusSymbol.classList.add('plus-symbol');
    plusSymbol.textContent = '+'; 

    const addTask = document.createElement('div'); 
    addTask.classList.add('add-task');
    addTask.textContent = 'Add Task';    

    content.append(plusSymbol, addTask);
    addTodoBox.appendChild(content);

    addTodoBox.addEventListener('click', () => {
        showAddTaskModal(); 
    });

    return addTodoBox;
}

function showIdividualProjectPage(project, index) {
    hideAllHomePages(); 
    let homepage = document.querySelector('#individual-project-page' + index);
    if (!homepage) {
        renderProject(project, index); 
    } else {
        homepage.style.display = 'block';
    }
}

export { showIdividualProjectPage }; 
