import { hideAllHomePages } from "./UIhelper";

function renderThisWeekPage() {
    const thisWeekPage = document.createElement('div');
    thisWeekPage.classList.add('main-pages');
    thisWeekPage.id = 'thisweekpage-container'; // Changed from 'todaypage-container' to 'thisweekpage-container'

    const thisWeekPageContent = document.createElement('div');
    thisWeekPageContent.classList.add('thisweekpage-content'); // Changed from 'todaypage-content' to 'thisweekpage-content'

    const thisWeekPageTodos = document.createElement('div');
    thisWeekPageTodos.classList.add('thisweekpage-todo-content'); // Changed from 'todaypage-todo-content' to 'thisweekpage-todo-content'

    const thisWeekPageTitle = document.createElement('div');
    thisWeekPageTitle.classList.add('page-title');
    thisWeekPageTitle.textContent = '📅 This Week\'s Tasks'; // Updated text content to reflect "This Week's Tasks"

    thisWeekPageContent.append(thisWeekPageTitle, thisWeekPageTodos);

    thisWeekPage.appendChild(thisWeekPageContent);

    const body = document.querySelector('.body');
    body.appendChild(thisWeekPage);

    thisWeekPage.style.display = 'block'; // This remains unchanged
}

function showThisWeekPage() {
    hideAllHomePages();
    let thisWeekPage = document.querySelector('#thisweekpage-container');
    if (!thisWeekPage) {
        renderThisWeekPage();
    } else {
        thisWeekPage.style.display = 'block';
    }
}

export { showThisWeekPage };