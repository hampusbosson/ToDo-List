import { hideAllHomePages } from "./UIhelper";
import { Project, ProjectList } from "./todoLogic";

function renderProjectPage() {
    const projectpage = document.createElement('div'); 
    projectpage.classList.add('main-pages'); 
    projectpage.id = 'projectpage-container';

    const projectpageContent = document.createElement('div'); 
    projectpageContent.classList.add('projectpage-content');

    const projectpageTitle = document.createElement('div'); 
    projectpageTitle.classList.add('projectpage-title'); 
    projectpageTitle.textContent = '📗 Projects';

    projectpageContent.appendChild(projectpageTitle);
    
    projectpage.appendChild(projectpageContent);

    const body = document.querySelector('.body'); 
    body.appendChild(projectpage);

    projectpage.style.display = 'block'; 
}

function addNewProject() {
    event.preventDefault();

    // Get value from input field
    const title = document.getElementById('project-title').value;

    const newProject = new Todo(title, details, date, priority);
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

function showProjectPage() {
    hideAllHomePages(); 
    let projectpage = document.querySelector('#projectpage-container');
    if (!projectpage) {
        renderProjectPage(); 
    } else {
        projectpage.style.display = 'block';
    }
}

export { showProjectPage };