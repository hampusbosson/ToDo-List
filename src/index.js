import './style.css'; 
import showModal from './modal.js'; 
import showHomePage from './homepage';
import { createButton } from './UIhelper';

function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        createButton('🏠 Home', () => showHomePage()),
        createButton('⭐ Today'),
        createButton('📚 This week'),
        createButton('📆 Upcoming'),
        createButton('📗 Logbook'),
        createButton('📖 Notes')
    );

    const createNew = createButton('+', () => showModal()); 
    createNew.classList.add('create-new'); 

    sidebar.append(sidebarOptions, createNew); 

    return sidebar; 
}

const content = document.getElementById('content');
const body = document.createElement('div'); 
body.classList.add('body'); 
content.append(createSidebar(), body);  
