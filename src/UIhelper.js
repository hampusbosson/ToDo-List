function createInputElement(type, id, name, placeholder, classList) {
    const input = document.createElement('input'); 
    input.type = type; 
    input.id = id; 
    input.name = name; 
    input.classList.add(classList); 
    if (placeholder) { // Only set placeholder if a value is provided
        input.placeholder = placeholder;
    }
    
    return input; 
}

function createValueInputElement(type, id, name, value, classList) {
    const input = document.createElement('input'); 
    input.type = type; 
    input.id = id; 
    input.name = name; 
    input.classList.add(classList); 
    if (value) { // Only set placeholder if a value is provided
        input.value = value;
    }

    return input; 
}

function createValueTextarea(id, name, value, classList) {
    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.name = name;
    textarea.classList.add(classList);
    textarea.wrap = "hard";

    // Function to adjust textarea height
    function adjustHeight() {
        // Ensure element is in the DOM and visible to calculate scrollHeight
        if (textarea.scrollHeight > 0) {
            textarea.style.height = '1px'; // Reset height to recalculate
            textarea.style.height = textarea.scrollHeight + 'px'; // Adjust to content
        }
    }

    // Initial value set and adjust height
    if (value) {
        textarea.value = value;
    }

    // Adjust height after appending to DOM to ensure accurate scrollHeight calculation
    setTimeout(adjustHeight, 0);

    // Add event listener for input to dynamically adjust height
    textarea.addEventListener('input', adjustHeight);

    return textarea;
}


function hideAllPages() {
    const pages = document.querySelectorAll('.page'); 
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function hideAllHomePages() {
    const pages = document.querySelectorAll('.main-pages'); 
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

function createButton(type, text, classList, onClick) {
    const button = document.createElement(type); 
    button.textContent = text; 
    button.classList.add(classList); 
    button.addEventListener('click', onClick);
    return button; 
}

function createIconButton(type, classList, onClick) {
    const button = document.createElement(type); 
    button.classList.add(classList); 
    button.addEventListener('click', onClick);
    return button; 
}

function getCurrentProjectPageIndex() {
    // Select all individual project pages
    const projectPages = document.querySelectorAll('[id^="individual-project-page"]');
    
    // Find the one that is currently visible (display !== 'none')
    const visiblePage = Array.from(projectPages).find(page => page.style.display === 'block');
    
    if (visiblePage) {
        // Extract the index from the id using a regular expression
        const match = visiblePage.id.match(/individual-project-page(\d+)/);
        if (match && match[1]) {
            return parseInt(match[1], 10); // Convert the extracted index to a number
        }
    }
    
    return null; // Return null if no page is visible or the index cannot be found
}

function deleteTodoElements(index) {
    // Select all elements with the class 'todo-item' that have the matching 'data-index'
    const todoElements = document.querySelectorAll(`.todo-element[data-index="${index}"]`);

    // Loop through the NodeList and remove each element from its parent
    todoElements.forEach(todoElement => {
        const parent = todoElement.parentElement;
        if (parent) {
            parent.removeChild(todoElement);
            parent.style.display = 'none'; 
        }
    });
}

function getSelectedPriority() {
    const priority = document.querySelector('.selected'); 
    return priority.textContent; 
}

function deleteTodoElementInWeek(index) {
    const todayContent = document.querySelector('#thisweekpage-container');
    const grandchild = todayContent.querySelector(`.thisweekpage-content .thisweekpage-todo-content .todo-element[data-index="${index}"]`);

    if (grandchild) {
        const todoBox = grandchild.parentElement;
        todoBox.style.display = 'none'; 
        grandchild.innerHTML = '';
        // If you want to remove the element completely, use:
        grandchild.remove();
    }
}

function deleteTodoElementInToday(index) {
    const todayContent = document.querySelector('#todaypage-container');
    const grandchild = todayContent.querySelector(`.todaypage-content .todaypage-todo-content .todo-element[data-index="${index}"]`);

    if (grandchild) {
        const todoBox = grandchild.parentElement;
        todoBox.style.display = 'none'; 
        grandchild.innerHTML = '';
        // If you want to remove the element completely, use:
        grandchild.remove();
    }
}

function updateExistingTodoBox(todoBox, title, date, details, priority) {
    const titleElement = todoBox.querySelector('.todo-title');
    const dateElement = todoBox.querySelector('.date-text');
    const detailsElement = todoBox.querySelector('.todo-details'); 
    const priorityElement = todoBox.querySelector('.todo-priority'); 
    
    if (titleElement) titleElement.textContent = title;
    if (dateElement) dateElement.textContent = date;
    if (detailsElement) detailsElement.textContent = details;
    if (priorityElement) priorityElement.textContent = priority;
}

export { createInputElement, 
    hideAllPages, 
    createButton, 
    hideAllHomePages, 
    createIconButton, 
    createValueInputElement, 
    createValueTextarea,
    getCurrentProjectPageIndex,
    deleteTodoElements,
    deleteTodoElementInToday,
    deleteTodoElementInWeek,
    updateExistingTodoBox,
    getSelectedPriority }; 