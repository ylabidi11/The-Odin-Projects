/**
 * The View handles any DOM manipulation or user interface stuff.
 * It should NOT directly update the data. Instead, it notifies the Controller
 * of user events (e.g. a click to remove a Todo).
 */

// We can export a class or just a set of functions. 
// Here, let's do a class for clarity.

export default class TodoView {
    constructor() {
        // Grab UI elements we need to update or read from
        this.ul = document.getElementById("display-todos-ul");
        this.todosLeftSpan = document.getElementById("todos-left-number");

        // We'll also get references to the input fields
        this.todoTitleInput = document.getElementById("todo-title-input");
        this.todoPriorityInput = document.getElementById("priority-input");
        this.todoDueDateInput = document.getElementById("due-date-input");

        // Buttons
        this.addButton = document.getElementById("add-todo-button");
        this.toggleAllButton = document.getElementById("toggle-all-todos-button");
        this.deleteAllButton = document.getElementById("delete-all-todos-button");
        this.deleteAllCompletedButton = document.getElementById(
            "delete-all-completed-todos-button"
        );
    }

    /**
     * Renders (or re-renders) the list of todos in the <ul>.
     * It completely clears the <ul> and rebuilds from scratch for simplicity.
     */
    renderTodos(todos) {
        // Clear the old content
        this.ul.innerHTML = "";

        // Rebuild each <li>
        todos.forEach(todo => {
            const li = this._createLiElement(todo);
            this.ul.appendChild(li);
        });
    }

    /**
     * Update the "todos left" number in the DOM.
     */
    updateCount(count) {
        this.todosLeftSpan.textContent = count;
    }

    /**
     * Clear the text inputs after a successful add.
     */
    clearInputs() {
        this.todoTitleInput.value = "";
        this.todoPriorityInput.value = "None";
        this.todoDueDateInput.value = "";
    }

    /**
     * Private method (by convention) to build <li> for a given todo.
     * This method sets up the remove and toggle events, but DOESN'T handle them itself.
     * Instead, it just dispatches a "custom event" or calls a callback.
     */
    _createLiElement(todo) {
        // Create the <li> container
        const li = document.createElement("li");
        li.id = `li-${todo.getId()}`;

        // Create a checkbox for "completed"
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `toggle-${todo.getId()}`;
        checkbox.checked = todo.getCompleted();

        // Create the title
        const h2 = document.createElement("h2");
        h2.textContent = todo.getTitle();

        // Create the priority/due date display
        const h3 = document.createElement("h3");
        // If dueDate is empty, show priority. Otherwise, show dueDate
        h3.textContent = todo.getDueDate() ? todo.getDueDate() : todo.getPriority();

        // Apply color class based on priority
        if (todo.getPriority() === "High") {
            h3.classList.add("red");
        } else if (todo.getPriority() === "Medium") {
            h3.classList.add("yellow");
        } else if (todo.getPriority() === "Low") {
            h3.classList.add("green");
        } else {
            h3.classList.add("gray");
        }

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.id = `remove-${todo.getId()}`;

        // Put everything together in the <li>
        li.appendChild(checkbox);
        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(removeBtn);

        return li;
    }
}
