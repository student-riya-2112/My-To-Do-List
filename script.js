window.onload = function () {
  showTasks();
};

document.getElementById("addTask").onclick = function () {
  let taskInput = document.getElementById("detail");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("⚠ Please enter a task!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  showTasks();
};

function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let ul = document.getElementById("task");
  ul.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "deleteBtn";
    btn.onclick = function () {
      deleteTask(index);
    };

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}