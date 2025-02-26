/**
 * This class defines a single Todo item.
 * We use getters and setters for encapsulation.
 */
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
        this.#completed = false; // Defaults to false when first created
    }

    // ----- Getters and Setters for each private field -----

    getTitle() {
        return this.#title;
    }

    setTitle(newTitle) {
        this.#title = newTitle;
    }

    getId() {
        return this.#id;
    }

    getPriority() {
        return this.#priority;
    }

    setPriority(newPriority) {
        this.#priority = newPriority;
    }

    getDueDate() {
        return this.#dueDate;
    }

    setDueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }

    getCompleted() {
        return this.#completed;
    }

    setCompleted(isCompleted) {
        this.#completed = isCompleted;
    }

    // For convenience, you might want to convert an instance to a plain object
    // so you can store/restore it in localStorage.
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
