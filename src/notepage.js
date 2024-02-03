import { hideAllHomePages } from "./UIhelper";
import { Note, NotesList } from "./todoLogic";
import { closeModal } from "./modal";
import { createValueTextarea } from "./UIhelper";

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
    
    notepage.style.display = 'block'; 
}

function addNewNote() {
    event.preventDefault();

    const title = document.getElementById('modal-note-title').value;
    const details = document.getElementById('modal-note-details').value;

    const newNote = new Note(title, details); 
    notesList.addNote(newNote); 

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

    deletebuttonContainer.appendChild(deleteButton);

    const noteTitle = createValueTextarea('note-title', 'note-title', `${note.title}`, 'note-titles');

    const noteDetails = createValueTextarea('note-details', 'note-details', `${note.details}`, 'note-details');

    noteElement.append(deletebuttonContainer, noteTitle, noteDetails); 

    return noteElement; 
}


function updateNoteBox() {
    const notepageContainer = document.querySelector('.notes-container');

    if (notepageContainer) {
        // Create a new noteBox and append it to the notepage
        const newNoteBox = renderNoteBox();
        notepageContainer.appendChild(newNoteBox);
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

export { showNotePage, addNewNote, updateNoteBox }; 