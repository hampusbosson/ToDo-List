import { format } from "date-fns";

class Todo {
    constructor(title, details, date, priority) {
        this.title = title; 
        this.details = details; 
        this.date = format(new Date(date), "LLL do"); 
        this.priority = priority; 
    }
}

class TodoList {
    constructor() {
        this.todos = []; 
    }

    addTodo(todo) {
        if (!(todo instanceof Todo)) {
            throw new error("Object mus be an instance of Todo"); 
        }

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



export { Todo, Project, Note, TodoList }; 