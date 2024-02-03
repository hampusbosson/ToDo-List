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




export { createInputElement, hideAllPages, createButton, hideAllHomePages, createIconButton, createValueInputElement, createValueTextarea }; 