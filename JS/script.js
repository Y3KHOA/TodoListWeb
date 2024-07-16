// Initial References
const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

// Window onload function
window.onload = () => {
  updateNote = "";
  count = Object.keys(localStorage).length;
  displayTasks();
};

// Function to display tasks
const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = "inline-block";
  } else {
    tasksDiv.style.display = "none";
  }

  // Clear tasks
  tasksDiv.innerHTML = "";

  // Fetch all keys in local storage
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();

  for (let key of tasks) {
    let classValue = "";

    // Get all values
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);

    // Add checkbox to mark task as completed
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = JSON.parse(value); // Set checkbox based on value
    taskInnerDiv.appendChild(checkbox);

    taskInnerDiv.innerHTML += `<span id="taskname">${key.split("_")[1]}</span>`;

    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    // editButton.textContent = "Edit "
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    taskInnerDiv.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    // deleteButton.textContent = "Delete "
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    taskInnerDiv.appendChild(deleteButton);

    if (JSON.parse(value)) {
      taskInnerDiv.classList.add("completed");
    }

    tasksDiv.appendChild(taskInnerDiv);
  }

  // Add event listeners to tasks
  tasks = document.querySelectorAll(".task");
  tasks.forEach((element, index) => {
    element.querySelector(".checkbox").onclick = () => {
      if (element.classList.contains("completed")) {
        updateStorage(element.id.split("_")[0], element.innerText, false);
      } else {
        updateStorage(element.id.split("_")[0], element.innerText, true);
      }
    };
  });

  // Edit tasks
  editTasks = document.getElementsByClassName("edit");
  Array.from(editTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      disableButtons(true);
      let parent = element.parentElement;
      newTaskInput.value = parent.querySelector("#taskname").innerText;
      updateNote = parent.id;
      parent.remove();
    });
  });

  // Delete tasks
  deleteTasks = document.getElementsByClassName("delete");
  Array.from(deleteTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      let parent = element.parentElement;
      removeTask(parent.id);
      parent.remove();
      count -= 1;
    });
  });
};

// Disable edit button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// Remove task from local storage
const removeTask = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};

// Add tasks to local storage
const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};

// Function to add new task
document.querySelector("#push").addEventListener("click", () => {
  disableButtons(false);
  if (newTaskInput.value.length == 0) {
    alert("Please Enter A Task");
  } else {
    if (updateNote == "") {
      updateStorage(count, newTaskInput.value, false);
    } else {
      let existingCount = updateNote.split("_")[0];
      removeTask(updateNote);
      updateStorage(existingCount, newTaskInput.value, false);
      updateNote = "";
    }
    count += 1;
    newTaskInput.value = "";
  }
});
