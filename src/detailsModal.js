function renderDetailsModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('details-modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('details-modal-container');

    const todoDetails = document.createElement('div'); 
    todoDetails.classList.add('todo-details');  

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('details-close-button'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
        closeDetailsModal(); 
    });

    modalContainer.append(todoDetails, closeButton);  
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    return modal; 
}

function renderTodoDetails(todo) {
    const content = document.querySelector('.todo-details');

    const detailsTitle = document.createElement('div');
    detailsTitle.classList.add('details-title');
    detailsTitle.textContent = `${todo.title}`;

    const detailsBox = document.createElement('div');
    detailsBox.classList.add('details-box');

    const leftDetails = document.createElement('div');
    leftDetails.classList.add('left-details');

    const rightDetails = document.createElement('div');
    rightDetails.classList.add('right-details');

    const project = document.createElement('div');
    project.textContent = 'Project:';
    const priority = document.createElement('div');
    priority.textContent = 'Priority:';
    const date = document.createElement('div');
    date.textContent = 'Due Date:';
    const details = document.createElement('div');
    details.textContent = 'Details:';

    const todoProject = document.createElement('div');
    todoProject.textContent = 'home';
    const todoPriority = document.createElement('div');
    todoPriority.textContent = `${todo.priority}`;
    const todoDate = document.createElement('div');
    todoDate.textContent = `${todo.formatDate}`;
    const todoDetails = document.createElement('div');
    todoDetails.textContent = `${todo.details}`;

    leftDetails.append(project, priority, date, details);
    rightDetails.append(todoProject, todoPriority, todoDate, todoDetails); 
     
    detailsBox.append(leftDetails, rightDetails); 

    content.append(detailsTitle, detailsBox); 
}

function closeDetailsModal() {
    const modal = document.querySelector('.details-modal'); 
    modal.style.display = 'none';

    const modalContent = document.querySelector('.todo-details');
    if (modalContent) {
        modalContent.innerHTML = ''; 
    }
}

function openDetailsModal() {
    const modal = renderDetailsModal(); 
    modal.style.display = 'flex'; 
    return modal; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.details-modal');
    if (event.target === modal) {
        closeDetailsModal(); 
    }
});

function showDetailsModal(todo) {
    let modal = document.querySelector('.details-modal');
    if (!modal) {
        openDetailsModal(); 
    } else {
        modal.style.display = 'flex';
    }

    renderTodoDetails(todo);
}

export { showDetailsModal }; 
