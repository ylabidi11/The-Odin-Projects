import Todo from "/src/model/Todo.js";

/**
 * This class manages the entire list of todos.
 * It encapsulates all data manipulation and retrieval.
 */
export default class TodoModel {
    constructor() {
        // We'll store our Todo objects in an array
        this.todos = [];
        // Keep track of the next ID we assign
        this.nextId = 1;
    }

    /**
     * Load any saved todos from localStorage at app start.
     */
    loadFromStorage() {
        const savedTodosString = localStorage.getItem("myTodos");
        if (savedTodosString) {
            const savedTodos = JSON.parse(savedTodosString);

            // Rebuild Todo instances from plain objects
            this.todos = savedTodos.map(obj => {
                const todo = new Todo(
                    obj.title,
                    obj.id,
                    obj.priority,
                    obj.dueDate
                );
                todo.setCompleted(obj.completed);
                return todo;
            });

            // Make sure our nextId is at least 1 greater
            // than the largest ID we find
            const maxId = this.todos.reduce((acc, t) => {
                return t.getId() > acc ? t.getId() : acc;
            }, 0);
            this.nextId = maxId + 1;
        }
    }

    /**
     * Save current todos array to localStorage.
     * Each Todo is turned into a plain object via `toObject()`.
     */
    saveToStorage() {
        const plainObjects = this.todos.map(todo => todo.toObject());
        localStorage.setItem("myTodos", JSON.stringify(plainObjects));
    }

    addTodo(title, priority, dueDate) {
        // Basic check to ensure we have a non-empty title
        if (!title.trim()) {
            alert("Please enter a valid title.");
            return;
        }
        // Create new Todo
        const todo = new Todo(title, this.nextId++, priority, dueDate);
        this.todos.push(todo);
        // Save changes
        this.saveToStorage();
        return todo;
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.getId() !== todoId);
        this.saveToStorage();
    }

    toggleTodo(todoId) {
        for (let todo of this.todos) {
            if (todo.getId() === todoId) {
                todo.setCompleted(!todo.getCompleted());
                break;
            }
        }
        this.saveToStorage();
    }

    toggleAll() {
        // If all are completed, uncheck them
        // If not, check them all
        const areAllCompleted = this.todos.every(t => t.getCompleted());
        this.todos.forEach(t => t.setCompleted(!areAllCompleted));
        this.saveToStorage();
    }

    removeAll() {
        this.todos = [];
        this.saveToStorage();
    }

    removeAllCompleted() {
        this.todos = this.todos.filter(t => !t.getCompleted());
        this.saveToStorage();
    }

    // We can compute derived data, like number of completed or total
    getCountCompleted() {
        return this.todos.filter(t => t.getCompleted()).length;
    }

    getCountTotal() {
        return this.todos.length;
    }
}
