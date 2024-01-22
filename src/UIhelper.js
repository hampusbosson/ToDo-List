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

function hideAllPages() {
    const pages = document.querySelectorAll('.page'); // Assuming all your pages have the 'page' class
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

export { createInputElement, hideAllPages }; 