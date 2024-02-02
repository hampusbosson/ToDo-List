import { format } from "date-fns";

class Todo {
    constructor(title, details, date, priority) {
        this.title = title; 
        this.details = details; 
        this.formatDate = format(new Date(date), "LLL do"); 
        this.date = date; 
        this.priority = this.capitalize(priority); 
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    changeTitle(newTite) {
        this.title = newTite;
        return this;
    }

    changeDetails(newDetails) {
        this.details = newDetails;
        return this;
    }

    changeDate(newDate) {
        this.date = newDate;
        this.formatDate = newDate;
        return this;
    }

    changePriority(newPriority) {
        this.priority = this.capitalize(newPriority);
        return this;
    }
}

class TodoList {
    constructor() {
        this.todos = []; 
    }

    addTodo(todo) {
        const titleExists = this.todos.some(existingTodo => existingTodo.title === todo.title); 
        if (titleExists) {
            throw new error (`A todo with the title "${todo.title}" already exists.`); 
        }

        this.todos.push(todo); 
    }

    getTodoByTitle(title) {
        return this.todos.find(todo => todo.title === title); 
    }

}

class Project {
    constructor(title) {
        this.title = title, 
        this.todos = []; 
    }

    addToDo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo); 
        } else {
            throw new error("Object must be of instance Todo"); 
        }
    }

    getToDos() {
        return this.todos; 
    }
}

class Note {
    constructor(title, details) {
        this.title = title; 
        this.details = details; 
    }
}

class NotesList {
    constructor() {
        this.notes = []; 
    }

    addNote(note) {
        const titleExists = this.notes.some(exsistingNote => exsistingNote === note.title);
        if (titleExists) {
            throw new error (`A note with the title "${note.title}" already exists.`);
        }

        this.notes.push(note); 
    }
}



export { Todo, Project, Note, TodoList, NotesList }; 