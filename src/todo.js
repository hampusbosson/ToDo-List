class todo {
    constructor(title, details, date, priority) {
        this.title = title; 
        this.details = details; 
        this.date = date; 
        this.priority = priority; 
    }
}

class project {
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

class note {
    constructor(title, details) {
        this.title = title; 
        this.details = details; 
    }
}