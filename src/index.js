import './style.css'; 

function createButton(text) {
    const button = document.createElement('li'); 
    button.textContent = text; 
    //button.addEventListener('click', onClick);
    return button; 
}

function createSidebar(){
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar'); 
    
    const sidebarOptions = document.createElement('ul'); 
    sidebarOptions.append(
        createButton('🏠 Home'),
        createButton('⭐ Today'),
        createButton('📚 This week'),
        createButton('📆 Upcoming'),
        createButton('📗 Logbook'),
        createButton('📖 Notes')
    );

    const createNew = createButton('+'); 
    createNew.classList.add('create-new'); 

    sidebar.append(sidebarOptions, createNew); 

    return sidebar; 
}

const content = document.getElementById('content');
const body = document.createElement('div'); 
body.classList.add('body'); 
body.textContent = 'test'; 
content.append(createSidebar(), body);  
