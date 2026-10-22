//t8
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");

let tasks = [];

addTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;

    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        let index = Array.from(taskList.children).indexOf(li);
        tasks.splice(index, 1);
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
});