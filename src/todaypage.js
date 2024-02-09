import { hideAllHomePages } from "./UIhelper";

function renderTodayPage() {
    const todayPage = document.createElement('div'); 
    todayPage.classList.add('main-pages'); 
    todayPage.id = 'todaypage-container'; // Changed from 'homepage-container' to 'todaypage-container'

    const todayPageContent = document.createElement('div'); 
    todayPageContent.classList.add('todaypage-content'); // Changed from 'homepage-content' to 'todaypage-content'

    const todayPageTodos = document.createElement('div'); 
    todayPageTodos.classList.add('todaypage-todo-content'); // Changed from 'homepage-todo-content' to 'todaypage-todo-content'

    const todayPageTitle = document.createElement('div'); 
    todayPageTitle.classList.add('page-title'); 
    todayPageTitle.textContent = '⭐ Today\'s Tasks'; // Changed text content to reflect "Today's Tasks"

    todayPageContent.append(todayPageTitle, todayPageTodos); 
    
    todayPage.appendChild(todayPageContent); 

    const body = document.querySelector('.body');
    body.appendChild(todayPage); 
    
    todayPage.style.display = 'block'; // This remains unchanged
}

function showTodayPage() {
    hideAllHomePages(); 
    let todaypage = document.querySelector('#todaypage-container');
    if (!todaypage) {
        renderTodayPage(); 
    } else {
        todaypage.style.display = 'block';
    }
}

export { showTodayPage };
