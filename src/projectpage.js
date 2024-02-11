import { hideAllHomePages, deleteStoredProjects } from "./UIhelper";
import { Project, ProjectList } from "./todoLogic";
import { closeModal } from "./modal";
import { showIdividualProjectPage } from "./individualProjectPage";

const projectList = new ProjectList(); 

function renderProjectPage() {
    const projectpage = document.createElement('div'); 
    projectpage.classList.add('main-pages'); 
    projectpage.id = 'projectpage-container';

    const projectpageContent = document.createElement('div'); 
    projectpageContent.classList.add('projectpage-content');

    const projectpageTitle = document.createElement('div'); 
    projectpageTitle.classList.add('projectpage-title'); 
    projectpageTitle.textContent = '📗 Projects';

    const projectsContainer = document.createElement('div'); 
    projectsContainer.classList.add('projects-container'); 

    projectpageContent.append(projectpageTitle, projectsContainer);

    projectpage.append(projectpageContent);

    const body = document.querySelector('.body'); 
    body.appendChild(projectpage);

    projectpage.style.display = 'none'; 
}

function renderStoredProjects(projectList) {
    const projectBoxes = []; 
    const projectPage = document.querySelector('.projects-container')
    projectList.projects.forEach((project, index) => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');  
        const projectElement = createProjectElement(project, index);
        projectBox.appendChild(projectElement);
        projectBoxes.push(projectBox);
    });

    projectBoxes.forEach(projectbox => projectPage.prepend(projectbox)); 
}

function renderProjectBox() {
    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box'); 

    let projectPage = document.querySelector('#projectpage-container');

    // If projectpage is in view, append only the latest project
    if (projectPage && projectList.projects.length > 0) { 
        const index = projectList.projects.length - 1;
        const latestProject = projectList.projects[projectList.projects.length - 1];
        const projectElement = createProjectElement(latestProject, index);
        projectBox.appendChild(projectElement);
    } else {
        // If projectpage is not in view, append the entire list
        projectList.projects.forEach((project, index) => {
            const projectElement = createProjectElement(project, index);
            projectBox.appendChild(projectElement);
        });
    }

    projectBox.appendChild(deleteContainer); 
    
    return projectBox; 
}


function createProjectElement(project, index) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-element');
    projectElement.id = 'project' + index; 

    const deleteContainer = document.createElement('div'); 
    deleteContainer.classList.add('project-delete-container'); 

    const deleteButton = document.createElement('button'); 
    deleteButton.classList.add('project-delete-btn'); 
    deleteButton.textContent = 'DELETE PROJECT'; 

    const projectTitle = document.createElement('div');
    projectTitle.textContent = project.title; 
    projectTitle.classList.add('project-title');

    deleteContainer.appendChild(deleteButton);
    projectElement.append(projectTitle, deleteContainer)

    projectTitle.addEventListener('click', () => {
        showIdividualProjectPage(project, index); 
    })

    deleteButton.addEventListener('click', () => {
        deleteProjectBox(index); 
        deleteStoredProjects(index); 
    })

    return projectElement;
}

function deleteProjectBox(index) {
    const projectBox = document.getElementById('project' + index);
    const parent = projectBox.parentElement;

    // Remove the parent element from its own parent
    if (parent && parent.parentElement) {
        parent.parentElement.removeChild(parent);
    }

    projectList.deleteProject(index);
}


function addNewProject() {
    event.preventDefault();

    // Get value from input field
    const title = document.getElementById('project-title').value;

    const newProject = new Project(title);
    if (!projectList.doesTitleExist(newProject)) {
        projectList.addProject(newProject);
        localStorage.setItem('projects', JSON.stringify(projectList.projects)); 
    } else {
        // Handle the case where the title already exists
        alert (`A project with the title "${newProject.title}" already exists.`);
        return;
    }

    document.getElementById('project-title').value = '';

    // Update the homepage to display the new todo
    updateProjectBox(); 
    //close modal after adding
    closeModal(); 
}

function updateProjectBox() {
    const projectContent = document.querySelector('.projects-container');
    
    if (projectContent) {
        // Create a new todoBox and append it to the homepage
        const newProjectBox = renderProjectBox();
        projectContent.appendChild(newProjectBox);
    }

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

function getProjectList() {
    return projectList; 
}

document.addEventListener('DOMContentLoaded', () => {   
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]"); 
    const renderdProjectList = new ProjectList(storedProjects); 
    storedProjects.forEach(project => projectList.addProject(new Project(project.title)));

    // Assuming you have a container element where todoBox should be appended
    renderStoredProjects(renderdProjectList); 
});


export { showProjectPage, addNewProject, getProjectList };