import './style.css'; 
import { showModal } from './modal.js'; 
import { showHomePage } from './homepage';
import { createButton } from './UIhelper';

function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        createButton('li', '🏠 Home', 'homeButton', () => showHomePage()),
        createButton('li', '⭐ Today', 'homeButton'),
        createButton('li', '📚 This week', 'homeButton'),
        createButton('li', '📆 Upcoming', 'homeButton'),
        createButton('li', '📗 Logbook', 'homeButton'),
        createButton('li', '📖 Notes', 'homeButton')
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
