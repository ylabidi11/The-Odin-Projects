/**
 * The entry point that brings everything together.
 */
import TodoModel from "/src/model/TodoModel.js";
import TodoView from "/src/view/TodoView.js";
import TodoController from "./controller/TodoController.js";

document.addEventListener("DOMContentLoaded", () => {
    // Create instances of Model, View, and Controller
    const model = new TodoModel();
    const view = new TodoView();
    const controller = new TodoController(model, view);

    // The controller automatically loads from localStorage and renders.
});
