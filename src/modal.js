function createButton(text) {
    const button = document.createElement('li'); 
    button.textContent = text; 
    //button.addEventListener('click', onClick);
    return button; 
}

function createModalHeader(modal) {
    const modalHeader = document.createElement('div'); 
    modalHeader.classList.add('modal-header'); 
    modalHeader.textContent = 'Create a new...'; 

    const closeButton = document.createElement('span'); 
    closeButton.classList.add('close'); 
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; 
    });

    modalHeader.appendChild(closeButton); 

    return modalHeader; 
}

function createModalSidebar() {
    const modalSidebar = document.createElement('div'); 
    modalSidebar.classList.add('modal-sidebar'); 

    const sidebarOptions = document.createElement('div'); 
    sidebarOptions.classList.add('modal-sidebar-options');
    sidebarOptions.append(
        createButton('To Do'),
        createButton('Project'),
        createButton('Note')
    ); 

    modalSidebar.appendChild(sidebarOptions); 

    return modalSidebar; 
}

function openModal() {
    const modal = document.createElement('div'); 
    modal.classList.add('modal'); 

    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('modal-container');

    const modalHeader = createModalHeader(modal);
    const modalSideBar = createModalSidebar(); 

    const modalContent = document.createElement('div'); 
    modalContent.classList.add('modal-content'); 

    const modalText = document.createElement('p'); 
    modalText.classList.add('modal-text'); 
    modalText.textContent = 'Some text in the modal..'; 

    modalContent.append(modalSideBar, modalText)

    modalContainer.append(modalHeader, modalContent);  
    modal.appendChild(modalContainer);

    document.body.appendChild(modal); 

    modal.style.display = 'block'; 
}

window.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function showModal() {
    let modal = document.querySelector('.modal');
    if (!modal) {
        openModal(); 
    } else {
        modal.style.display = 'block';
    }
}

export default showModal; 