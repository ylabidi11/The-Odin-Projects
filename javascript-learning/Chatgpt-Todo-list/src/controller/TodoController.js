/**
 * The Controller connects user events from the View with operations in the Model.
 * It also triggers the View to re-render once the Model is updated.
 */

export default class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Initial load from localStorage
        this.model.loadFromStorage();

        // Setup event listeners
        this._addEventListeners();

        // First render
        this._render();
    }

    /**
     * Private method to wire up button clicks, etc.
     */
    _addEventListeners() {
        // Add new Todo
        this.view.addButton.addEventListener("click", () => {
            this._handleAddTodo();
        });

        // Also handle pressing Enter in the "title" input
        this.view.todoTitleInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this._handleAddTodo();
            }
        });

        // Toggle all
        this.view.toggleAllButton.addEventListener("click", () => {
            this.model.toggleAll();
            this._render();
        });

        // Delete all
        this.view.deleteAllButton.addEventListener("click", () => {
            this.model.removeAll();
            this._render();
        });

        // Delete all completed
        this.view.deleteAllCompletedButton.addEventListener("click", () => {
            this.model.removeAllCompleted();
            this._render();
        });

        // Because each <li> is dynamically generated, we handle clicks via event delegation
        this.view.ul.addEventListener("click", (e) => {
            // e.target => the exact element that was clicked
            const { id } = e.target;

            if (id.startsWith("remove-")) {
                // user clicked remove button
                const todoId = parseInt(id.split("-")[1], 10);
                this.model.removeTodo(todoId);
                this._render();
            }
            else if (id.startsWith("toggle-")) {
                // user clicked the checkbox
                const todoId = parseInt(id.split("-")[1], 10);
                this.model.toggleTodo(todoId);
                this._render();
            }
        });
    }

    /**
     * Private method that centralizes the "add todo" flow.
     */
    _handleAddTodo() {
        const title = this.view.todoTitleInput.value;
        const priority = this.view.todoPriorityInput.value;
        const dueDate = this.view.todoDueDateInput.value;
        // Add it to model
        const newTodo = this.model.addTodo(title, priority, dueDate);
        // If addTodo was successful, newTodo won't be undefined
        if (newTodo) {
            // Clear the inputs
            this.view.clearInputs();
            // Re-render
            this._render();
        }
    }

    /**
     * Re-render the UI based on the current Model data.
     */
    _render() {
        // Refresh the list
        this.view.renderTodos(this.model.todos);
        // Update the "todos left" display
        const total = this.model.getCountTotal();
        this.view.updateCount(total);
    }
}
