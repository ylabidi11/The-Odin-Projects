export default class Todo {
    #title;
    #id;
    #priority;
    #dueDate;
    #completed;

    constructor(title, id, priority = null, dueDate = null) {
        this.#title = title;
        this.#id = id;
        this.#priority = priority;
        this.#dueDate = dueDate;
        this.#completed = false;
    }

    changeTitle(newTitle) {
        this.#title = newTitle;
    }

    getTitle() {
        return this.#title;
    }

    getId() {
        return this.#id;
    }

    changePriority(newPriority) {
        this.#priority = newPriority;
    }

    getPriority() {
        return this.#priority;
    }

    changeDueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }

    getDueDate() {
        return this.#dueDate;
    }

    setCompleted(newCompleted) {
        this.#completed = newCompleted;
    }

    getCompleted() {
        return this.#completed;
    }
    
    toObject() {
        return {
            title: this.#title,
            id: this.#id,
            priority: this.#priority,
            dueDate: this.#dueDate,
            completed: this.#completed
        };
    }
}