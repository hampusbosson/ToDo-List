import './style.css'; 
import { showModal } from './modal.js'; 
import { showHomePage } from './homepage';
import { createButton } from './UIhelper';
import { showNotePage } from './notepage.js';
import { showProjectPage } from './projectpage.js';
import { renderProject } from './individualProjectPage.js';

function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        createButton('li', '🏠 All Tasks', 'homeButton', () => showHomePage()),
        createButton('li', '⭐ Today', 'homeButton'),
        createButton('li', '📅 This week', 'homeButton'),
        createButton('li', '📗 Projects', 'homeButton', () => showProjectPage()),
        createButton('li', '📖 Notes', 'homeButton', () => showNotePage())
    );

    const createNew = createButton('li', '+', 'homeButton', () => showModal()); 
    createNew.classList.add('create-new'); 

    sidebar.append(sidebarOptions, createNew); 

    return sidebar; 
}


const content = document.getElementById('content');
const body = document.createElement('div'); 
body.classList.add('body'); 
content.append(createSidebar(), body);  
showProjectPage(); 
showNotePage(); 
showHomePage();

document.addEventListener('change', function(e) {
    if (e.target && e.target.matches('.todo-checkbox')) {
        const index = e.target.getAttribute('data-checkbox-index');
        const allCheckboxes = document.querySelectorAll(`.todo-checkbox[data-checkbox-index="${index}"]`);
        allCheckboxes.forEach(cb => {
            cb.checked = e.target.checked;
        });
    }
});