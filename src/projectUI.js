import { createInputElement, hideAllPages } from "./UIhelper";

function renderProjectPage() {
    const projectPage = document.createElement('div'); 
    projectPage.classList.add('page'); 
    projectPage.id = 'project-container'; 

    const projectContent = document.createElement('div'); 
    projectContent.classList.add('project-page'); 

    const createProjectButton = document.createElement('button'); 
    createProjectButton.textContent = 'CREATE PROJECT'; 
    createProjectButton.classList.add('create-project-btn');

    projectContent.append(
        createInputElement('text', 'project-title', 'project-title', 'Title: House Renovation', 'project-title'),
        createProjectButton
    ); 

    projectPage.appendChild(projectContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(projectPage); 

    projectPage.style.display = 'block'; 
}


function showProjectPage() {
    hideAllPages(); 
    let projectPage = document.getElementById('project-page');
    if (!projectPage) {
        renderProjectPage(); 
    } else {
        projectPage.style.display = 'block';
    }
}

export default showProjectPage; 