document.addEventListener("DOMContentLoaded", () => {
  const searchText = document.getElementById("text1");
  const button = document.getElementById("text2");
  const list = document.getElementById("text3");

  let task = JSON.parse(localStorage.getItem("tasks")) || []; // Load saved tasks
  task.forEach((task) => renderTask(task)); // Use correct array reference

  button.addEventListener("click", () => {
    const taskText = searchText.value.trim();
    if (taskText === "") return; // Exit if input is empty
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    task.push(newTask); // Add new task to the array
    saveTasks(); // Save tasks to localStorage
    renderTask(newTask); // Render the new task
    searchText.value = ""; // Clear input
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed"); // Fix typo "compled"

    li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteButton = li.querySelector("button");
    if (deleteButton) {
      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        task = task.filter((t) => t.id !== task.id); // Fix variable name
        li.remove();
        saveTasks();
      });
    }

    list.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(task)); // Save tasks to localStorage
  }
});
