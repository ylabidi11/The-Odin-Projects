import Todo from "./components/Todo";
import Li from "./components/li/index.js";

const todoList = () => {
    // Initalizers that is needed for program to run
    // Functionality will not be altered nor will they disappear
    let todosId = 1;
    let todos = [];
    const ul = document.getElementById("display-todos-ul");

    // Check completed : number of todos in total
    let countCompleted = 0;
    let numberOfTodos = 0;

    // Number of todos span
    let todosSpan = document.getElementById("todos-left-number");

    // Buttons on the interface
    const addButton = document.getElementById("add-todo-button")
    const toggleAllButton = document.getElementById("toggle-all-todos-button");
    const deleteAllButton = document.getElementById("delete-all-todos-button")
    const deleteAllCompletedButton = document.getElementById("delete-all-completed-todos-button");

    // Inputs on the interface
    const todoTitleInput = document.getElementById("todo-title-input");
    const todoPriorityInput = document.getElementById("priority-input");
    const todoDueDateInput = document.getElementById("due-date-input");

    // Add event listeners to the buttons on the interface
    const addEventsToListeners = () => {
        addButton.addEventListener('click', () => {
            addTodo(todoTitleInput.value, todoPriorityInput.value, todoDueDateInput.value);

            todoTitleInput.value = "";
            todoPriorityInput.value = "None";
            todoDueDateInput.value = "";
        });

        toggleAllButton.addEventListener('click', toggleAll)

        deleteAllButton.addEventListener('click', () => {
            todos = [];
            ul.innerHTML = "";
            countCompleted = 0;
            numberOfTodos = 0;
            todosSpan.innerHTML = 0;
        })

        deleteAllCompletedButton.addEventListener('click', deleteAllCompleted);
    }

    // Display the todos that were already in the array
    // This should run only once at the beginning of the 
    // program and never again
    const displayTodos = (todos) => {
        for (let i = 0; i < todos.length; i++) {
            generateLi(todos[i]);
        }
    }

    // Add new todo to the todos array and then call generateLi function
    const addTodo = (title, todoPriority, todoDueDate) => {
        if (title === "" || title === " " || title === "  ") {
            window.alert("Please do not leave first input as empty");
            return
        }

        // Generate Todo object for each todo

        const todo = new Todo(title, todosId++, todoPriority, todoDueDate);

        generateLi(todo);

        todos.push(todo);
    }

    // Generate li that will display the todos under ul
    const generateLi = (todo) => {
        const tempLi = new Li(
            todo.getTitle(),
            todo.getId(),
            todo.getPriority(),
            todo.getDueDate(),
            todo.getCompleted(),
        );

        tempLi.setRemoveFunction(parseId);
        tempLi.setToggleFunction(toggleTodo);

        todosSpan.innerHTML = (numberOfTodos++) + 1;

        ul.appendChild(tempLi.li);
    }

    // Get the id of the todo and then use the removeTodo to remove it
    const parseId = (e) => {
        let targetId = e.target.id;
        let idNumber = targetId.split("-")[1];

        removeTodo(parseInt(idNumber));
    }

    // Remove the todo
    const removeTodo = (givenId) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getId() === givenId) {
                if (todos[i].getCompleted() === true) countCompleted--;
                todos.splice(i, 1);
                break;
            }
        }

        todosSpan.innerHTML = (numberOfTodos--) - 1;

        document.getElementById("li-" + givenId.toString()).remove();
    }

    // Set todo completion to true or false
    const toggleTodo = (e) => {
        let targetId = e.target.id;
        let idNumber = targetId.split("-")[1];

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getId() === parseInt(idNumber)) {
                if (todos[i].getCompleted()) {
                    todos[i].setCompleted(false);
                    countCompleted--;
                } else {
                    todos[i].setCompleted(true);
                    countCompleted++;
                }
                break;
            }
        }
    }

    // Toggles all the todos to true or false (case dependent)
    const toggleAll = () => {
        const listItems = document.querySelectorAll("li div input");
        if (numberOfTodos === countCompleted) {
            for (let i = 0; i < todos.length; i++) {
                todos[i].setCompleted(false);
                listItems[i].checked = false;
            }
            countCompleted = 0;
        } else {
            for (let i = 0; i < todos.length; i++) {
                todos[i].setCompleted(true);
                listItems[i].checked = true;
            }
            countCompleted = numberOfTodos;
            todosSpan.innerHTML = numberOfTodos;
        }
    }

    const deleteAllCompleted = () => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getCompleted() === true) {
                removeTodo(todos[i].getId());
                i--;
            }
        }
    }

    // Call functions
    displayTodos(todos);
    addEventsToListeners();
}

const program = todoList();