import { hideAllHomePages } from "./UIhelper";

function renderHomePage() {
    const homepage = document.createElement('div'); 
    homepage.classList.add('home-page'); 
    homepage.id = 'homepage-container'; 

    const homepageContent = document.createElement('div'); 
    homepageContent.classList.add('homepage-content'); 
    homepageContent.textContent = 'testing'; 

    homepage.appendChild(homepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(homepage); 
    
    homepage.style.display = 'block'; 
}

function showHomePage() {
    hideAllHomePages(); 
    let homepage = document.getElementById('homepage-container');
    if (!homepage) {
        renderHomePage(); 
    } else {
        homepage.style.display = 'block';
    }
}

export default showHomePage; 