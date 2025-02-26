import TodoModel from "../src/model/TodoModel.js";

// A quick test using console.assert
const model = new TodoModel();
model.addTodo("Test Task", "High", "2025-12-31");

// We expect exactly 1 todo now
console.assert(
    model.getCountTotal() === 1,
    `Expected 1 todo, got ${model.getCountTotal()}`
);

// Try toggling it
const firstTodoId = model.todos[0].getId();
model.toggleTodo(firstTodoId);
console.assert(
    model.todos[0].getCompleted() === true,
    "Expected the todo to be marked as completed."
);

// If no errors show up in console, our basic checks passed.
console.log("All tests passed!");
