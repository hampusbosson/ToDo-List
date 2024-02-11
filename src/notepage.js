import { hideAllHomePages } from "./UIhelper";
import { Note, NotesList } from "./todoLogic";
import { closeModal } from "./modal";
import { createValueTextarea, deleteStoredNotes } from "./UIhelper";

const notesList = new NotesList(); 

function renderNotePage() {
    const notepage = document.createElement('div'); 
    notepage.classList.add('main-pages'); 
    notepage.id = 'notepage-container'; 

    const notepageContent = document.createElement('div'); 
    notepageContent.classList.add('notepage-content'); 

    const notepageTitle = document.createElement('div'); 
    notepageTitle.classList.add('note-page-title'); 
    notepageTitle.textContent = '📖 Notes';

    const notesContainer = document.createElement('div'); 
    notesContainer.classList.add('notes-container'); 

    notepageContent.append(notepageTitle, notesContainer); 
    
    notepage.appendChild(notepageContent); 

    const body = document.querySelector('.body');
    body.appendChild(notepage); 
    
    notepage.style.display = 'none'; 
}

function addNewNote() {
    event.preventDefault();

    const title = document.getElementById('modal-note-title').value;
    const details = document.getElementById('modal-note-details').value;

    const newNote = new Note(title, details); 
    notesList.addNote(newNote); 
    localStorage.setItem('notes', JSON.stringify(notesList.notes)); 

    document.getElementById('modal-note-title').value = '';
    document.getElementById('modal-note-details').value = ''; 

    updateNoteBox();
    
    closeModal(); 
}

function renderNoteBox() {
    const noteBox = document.createElement('div'); 
    noteBox.classList.add('note-box'); 

    let notesPage = document.querySelector('#notepage-container'); 

    // If homepage is in view, append only the latest note
    
    if (notesPage && notesList.notes.length > 0) { 
        const index = notesList.notes.length - 1;
        const latestNote = notesList.notes[notesList.notes.length - 1];
        const noteElement = createNoteElement(latestNote, index);
        noteBox.appendChild(noteElement);
    } else {
        // If homepage is not in view, append the entire list
        notesList.notes.forEach((note, index) => {
            const noteElement = createNoteElement(note, index);
            noteBox.appendChild(noteElement);
        });
    }
    
    return noteBox; 
}

function createNoteElement(note, index) {
    const noteElement = document.createElement('div'); 
    noteElement.classList.add('note-element'); 
    noteElement.id = 'note' + index; 

    const deletebuttonContainer = document.createElement('div'); 
    deletebuttonContainer.classList.add('note-delete-btn-container');

    const deleteButton = document.createElement('span'); 
    deleteButton.classList.add('note-delete-button'); 
    deleteButton.id = 'note-delete' + index; 
    deleteButton.innerHTML = '&times;';

    deleteButton.addEventListener('click', () => {
        deleteNoteBox('note' + index);
        deleteStoredNotes(index);
    })

    deletebuttonContainer.appendChild(deleteButton);

    const noteTitle = createValueTextarea('note-title', 'note-title', `${note.title}`, 'note-titles');
    noteTitle.contentEditable = true; 

    const noteDetails = createValueTextarea('note-details', 'note-details', `${note.details}`, 'note-details');
    noteDetails.contentEditable = true; 

    noteElement.append(deletebuttonContainer, noteTitle, noteDetails); 

    return noteElement; 
}

function renderStoredNotes(notesList) {
    const noteBoxes = []; 
    const notePage = document.querySelector('.notes-container')
    notesList.notes.forEach((note, index) => {
        const notesBox = document.createElement('div');
        notesBox.classList.add('note-box');  
        const noteElement = createNoteElement(note, index);
        notesBox.appendChild(noteElement);
        noteBoxes.push(notesBox);
    });

    noteBoxes.forEach(notebox => notePage.prepend(notebox)); 
}

function deleteNoteBox(index) {
    const noteBox = document.getElementById(index);
    const parent = noteBox.parentElement;

    // Remove the parent element from its own parent
    if (parent && parent.parentElement) {
        parent.parentElement.removeChild(parent);
    }
}


function updateNoteBox() {
    const notepageContainer = document.querySelector('.notes-container');

    if (notepageContainer) {
        // Create a new noteBox and append it to the notepage
        const newNoteBox = renderNoteBox();
        notepageContainer.prepend(newNoteBox);
    }
}

function showNotePage() {
    hideAllHomePages(); 
    let notepage = document.querySelector('#notepage-container');
    if (!notepage) {
        renderNotePage(); 
    } else {
        notepage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {   
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]"); 
    const renderedNotesList = new NotesList(storedNotes); 
    storedNotes.forEach(note => notesList.addNote(new Note(note.title, note.details)));

    // Assuming you have a container element where todoBox should be appended
    renderStoredNotes(renderedNotesList); 
});

export { showNotePage, addNewNote, updateNoteBox }; 