import { createInputElement, hideAllPages } from "./UIhelper";

function renderNotePage() {
    const notePage = document.createElement('div'); 
    notePage.classList.add('page'); 
    notePage.id = 'note-container'; 

    const noteContent = document.createElement('div'); 
    noteContent.classList.add('note-page'); 

    const upperContent = document.createElement('div');
    upperContent.classList.add('note-upper');

    const createNoteButton = document.createElement('button'); 
    createNoteButton.textContent = 'CREATE NOTE'; 
    createNoteButton.classList.add('create-note-btn'); 

    upperContent.append(
        createInputElement('text', 'note-title', 'note-title', 'Title: Study session monday', 'note-title'),
        createInputElement('text', 'note-details', 'note-details', 'Details: Study session details...', 'note-details')
    );

    noteContent.append(
        upperContent,
        createNoteButton
    ); 

    notePage.appendChild(noteContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(notePage); 

    notePage.style.display = 'block'; 
}


function showNotePage() {
    hideAllPages(); 
    let notePage = document.getElementById('note-page');
    if (!notePage) {
        renderNotePage(); 
    } else {
        notePage.style.display = 'block';
    }
}

export default showNotePage; 