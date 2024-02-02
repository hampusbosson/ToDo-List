import { createInputElement, hideAllPages, createButton } from "./UIhelper";
import { addNewNote } from "./notepage";

function renderNotePage() {
    const notePage = document.createElement('div'); 
    notePage.classList.add('page'); 
    notePage.id = 'note-container'; 

    const noteContent = document.createElement('form'); 
    noteContent.classList.add('note-page'); 

    const upperContent = document.createElement('div');
    upperContent.classList.add('note-upper');

    upperContent.append(
        createInputElement('text', 'note-title', 'note-title', 'Title: Study session monday', 'input'),
        createInputElement('text', 'note-details', 'note-details', 'Details: Study session details...', 'input')
    );

    noteContent.append(
        upperContent,
        createButton('button', 'CREATE NOTE', 'create-note-btn', () => {
            addNewNote(); 
        })
    ); 

    notePage.appendChild(noteContent);     

    const modalContent = document.querySelector('.modal-text'); 
    modalContent.appendChild(notePage); 

    notePage.style.display = 'block'; 
}


function showNotePage() {
    hideAllPages(); 
    let notePage = document.getElementById('note-container');
    if (!notePage) {
        renderNotePage(); 
    } else {
        notePage.style.display = 'block';
    }
}

export default showNotePage; 