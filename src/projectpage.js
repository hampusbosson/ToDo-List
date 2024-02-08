import { hideAllHomePages } from "./UIhelper";
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

    
    
    return projectBox; 
}

function createProjectElement(project, index) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-element');
    projectElement.id = 'project' + index; 


    const projectTitle = document.createElement('div');
    projectTitle.textContent = project.title; 
    projectTitle.classList.add('project-title');

    projectElement.appendChild(projectTitle)

    projectElement.addEventListener('click', () => {
        showIdividualProjectPage(project, index); 
    })

    return projectElement;
}


function addNewProject() {
    event.preventDefault();

    // Get value from input field
    const title = document.getElementById('project-title').value;

    const newProject = new Project(title);
    if (!projectList.doesTitleExist(newProject)) {
        projectList.addProject(newProject);
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


export { showProjectPage, addNewProject, getProjectList };