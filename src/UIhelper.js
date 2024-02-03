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
    textarea.classList.add(classList); // Use spread syntax for multiple classes
    textarea.wrap = "hard";

    if (value) {
        textarea.value = value;
    }


    // Event listener to grow the textarea without scrollbar
    textarea.addEventListener('input', function() {
        this.style.height = '1px'; // Reset height
        this.style.height = this.scrollHeight + 'px'; // Set new height based on content
    });



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