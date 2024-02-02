import { hideAllHomePages } from "./UIhelper";

function renderNotePage() {
    const notepage = document.createElement('div'); 
    notepage.classList.add('main-pages'); 
    notepage.id = 'notepage-container'; 

    const notepageContent = document.createElement('div'); 
    notepageContent.classList.add('notepage-content'); 

    const notepageTitle = document.createElement('div'); 
    notepageTitle.classList.add('note-page-title'); 
    notepageTitle.textContent = '📖 Notes';

    notepageContent.appendChild(notepageTitle); 
    
    notepage.appendChild(notepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(notepage); 
    
    notepage.style.display = 'block'; 
}

function showNotePage() {
    hideAllHomePages(); 
    let notepage = document.querySelector('#notepage-container');
    if (!notepage) {
        renderNotePage(); 
    } else {
        notepage.style.display = 'block';
    }
}

export { showNotePage }; 