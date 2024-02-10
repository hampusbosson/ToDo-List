import './style.css'; 
import { showModal } from './modal.js'; 
import { showHomePage } from './homepage';
import { createButton } from './UIhelper';
import { showNotePage } from './notepage.js';
import { showProjectPage } from './projectpage.js';
import { showTodayPage } from './todaypage.js';
import { showThisWeekPage } from './thisweekpage.js';

function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        createButton('li', '🏠 All Tasks', 'homeButton', () => showHomePage()),
        createButton('li', '⭐ Today', 'homeButton', () => showTodayPage(), 'todaypage-button'),
        createButton('li', '📅 This week', 'homeButton', () => showThisWeekPage()),
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
showThisWeekPage(); 
showProjectPage(); 
showNotePage(); 
showHomePage();
showTodayPage(); 

const todaypageButton = document.getElementById('todaypage-button'); 
todaypageButton.classList.add('active'); 

// Add event listeners to all buttons with the class 'homeButton'
document.querySelectorAll('.homeButton').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active' class from all buttons
        document.querySelectorAll('.homeButton').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add the 'active' class to the clicked button
        this.classList.add('active');
    });
});

document.addEventListener('change', function(e) {
    if (e.target && e.target.matches('.todo-checkbox')) {
        const index = e.target.getAttribute('data-checkbox-index');
        const allCheckboxes = document.querySelectorAll(`.todo-checkbox[data-checkbox-index="${index}"]`);
        allCheckboxes.forEach(cb => {
            cb.checked = e.target.checked;
        });
    }
});