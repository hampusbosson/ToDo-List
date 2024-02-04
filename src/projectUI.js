import { createInputElement, hideAllPages, createButton } from "./UIhelper";
import { addNewProject } from "./projectpage";

function renderProjectPage() {
    const projectPage = document.createElement('div'); 
    projectPage.classList.add('page'); 
    projectPage.id = 'project-container'; 

    const projectContent = document.createElement('form'); 
    projectContent.classList.add('project-page'); 

    projectContent.append(
        createInputElement('text', 'project-title', 'project-title', 'Title: House Renovation', 'input'),
        createButton('button', 'CREATE PROJECT', 'create-project-btn', () => {
            addNewProject(); 
        })
    ); 

    projectPage.appendChild(projectContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(projectPage); 

    projectPage.style.display = 'block'; 
}


function showProjectPage() {
    hideAllPages(); 
    let projectPage = document.getElementById('project-container');
    if (!projectPage) {
        renderProjectPage(); 
    } else {
        projectPage.style.display = 'block';
    }
}

export default showProjectPage; 