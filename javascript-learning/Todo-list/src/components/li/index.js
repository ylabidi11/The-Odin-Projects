import "./styles.css"

export default function Li(title, id, priority, dueDate, completed) {
    // For li itself 3
    const li = document.createElement('li');
    li.id = "li-" + id;

    // For main div 4
    const mainDiv = generateMainDiv(id);
    li.appendChild(mainDiv);

    // For completed 7
    const toggleButton = generateToggleButton(id, completed);
    mainDiv.appendChild(toggleButton);

    const titleDueDateDiv = generateTitleDueDiv();
    mainDiv.appendChild(titleDueDateDiv);

    // For title 6
    const todoTitle = generateTodoTitle(id, title);
    titleDueDateDiv.appendChild(todoTitle);

    // For due date 8
    const due = generateDueDate(id, dueDate, priority);
    titleDueDateDiv.appendChild(due);

    // For remove button 13
    const removeButton = generateRemoveButton(id);
    mainDiv.appendChild(removeButton);

    const setRemoveFunction = (fun) => removeButton.addEventListener('click', fun);
    const setToggleFunction = (fun) => toggleButton.addEventListener('click', fun);

    return { setRemoveFunction, setToggleFunction, li };
}

function generateMainDiv(id) {
    let mainDiv = document.createElement('div');
    mainDiv.className = "div-holding-todo-li";
    mainDiv.id = "div-" + id;

    return mainDiv;
}

function generateToggleButton(id, completed) {
    let toggleButton = document.createElement('input');
    toggleButton.type = "checkbox"
    toggleButton.id = "toggle-" + id;
    toggleButton.checked = completed;

    return toggleButton;
}

function generateTitleDueDiv() {
    let div = document.createElement('div');
    div.className = "title-due-date-div";
    
    return div;
}

function generateTodoTitle(id, title) {
    let todoTitle = document.createElement('h2');
    todoTitle.innerText = title;
    todoTitle.id = "title-" + id;

    return todoTitle;
}

function generateDueDate(id, dueDate, priority) {
    let due = document.createElement('h3');
    due.innerText = dueDate === "" ? priority : dueDate;
    due.id = "duedate-" + id;

    if (priority === "High") {
        due.className = "red";
    } else if (priority === "Medium") {
        due.className = "yellow";
    } else if (priority === "Low") {
        due.className = "green";
    } else {
        due.className = "gray";
    }

    return due;
}

function generateRemoveButton(id) {
    let removeButton = document.createElement('button');
    removeButton.id = "removeButton-" + id;
    removeButton.innerText = "X";

    return removeButton;
}