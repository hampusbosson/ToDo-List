import { format, isToday, isThisISOWeek } from "date-fns";

class Todo {
    constructor(title, details, date, priority, project) {
        this.title = title; 
        this.details = details; 
        this.formatDate = format(new Date(date), "LLL do"); 
        this.date = date; 
        this.priority = this.capitalize(priority); 
        this.project = project; 
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
    constructor(todos = []) {
        this.todos = todos; 
    }

    doesTitleExist(todo) {
        // Returns true if the title exists, false otherwise
        return this.todos.some(existingTodo => existingTodo.title === todo.title);
    }

    addTodo(todo) {
        const titleExists = this.todos.some(existingTodo => existingTodo.title === todo.title); 
        if (titleExists) {
            alert (`A todo with the title "${todo.title}" already exists.`); 
            return; 
        }

        this.todos.push(todo); 
        //this.saveToLocalStorage(); 
    }

    getTodoByTitle(title) {
        return this.todos.find(todo => todo.title === title); 
    }

    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
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
            alert ("Object must be of instance Todo"); 
            return; 
        }
    }

    getToDos() {
        return this.todos; 
    }
}

class ProjectList {
    constructor(projects = []) {
        this.projects = projects; 
    }

    doesTitleExist(project) {
        // Returns true if the title exists, false otherwise
        return this.projects.some(existingProject => existingProject.title === project.title);
    }

    addProject(project) {
        const titleExists = this.projects.some(exsistingProject => exsistingProject.title === project.title); 
        if (titleExists) {
            alert (`A project with the title "${project.title}" already exists`);
            return; 
        }

        this.projects.push(project); 
    }

    getProjectByTitle(projectTitle) {
        const project = this.projects.find(p => p.title === projectTitle);

        return project || null; 
    }

    getIndexOfTitle(projectTitle) {
        // Find the index of the project in the projects array that matches the projectTitle
        const index = this.projects.findIndex(p => p.title === projectTitle);
        // Return the index of found project or -1 if not found
        return index;
    }
    
    getTitleOfIndex(index) {
        // Check if the index is within the bounds of the projects array
        if (index >= 0 && index < this.projects.length) {
            // Return the title of the project at the given index
            return this.projects[index].title;
        } else {
            // Return null or some indication that the index is invalid
            return null;
        }
    }

    deleteProject(index) {
        // Check if the index is valid
        if (index >= 0 && index < this.projects.length) {
            // Remove the project at the specified index
            this.projects.splice(index, 1);
        } else {
            // Optionally handle the case where the index is invalid
            console.error("Invalid index for deletion.");
        }
    }
}

class Note {
    constructor(title, details) {
        this.title = title; 
        this.details = details; 
    }
}

class NotesList {
    constructor(notes = []) {
        this.notes = notes; 
    }

    addNote(note) {
        const titleExists = this.notes.some(exsistingNote => exsistingNote === note.title);
        if (titleExists) {
            alert (`A note with the title "${note.title}" already exists.`);
            return; 
        }

        this.notes.push(note); 
    }
}



export { Todo, Project, Note, TodoList, NotesList, ProjectList }; 