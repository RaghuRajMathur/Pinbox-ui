// script.js

// Simulate task data
const tasks = [
    { title: "Design Login Page", deadline: "2025-01-20" },
    { title: "Create Database Schema", deadline: "2025-01-25" },
  ];
  
  // Render tasks to the list
  function renderTasks() {
    const taskList = document.getElementById("tasks-list");
    taskList.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = `${task.title} - Deadline: ${task.deadline}`;
      taskList.appendChild(li);
    });
  }
  
  // Add a new task (for demo purposes)
  document.getElementById("add-task-btn").addEventListener("click", () => {
    const newTask = { title: "New Task", deadline: "2025-02-01" };
    tasks.push(newTask);
    renderTasks();
  });
  
  // Initial render
  renderTasks();
  