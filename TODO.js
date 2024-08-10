const addTask = document.getElementById('addTasks');
const addBtn = document.querySelector('button');
const taskInput = document.getElementById('inptask');

addBtn.addEventListener('click', addTaskHandler);

function addTaskHandler() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a task');
    return;
  }

  const taskListItem = document.createElement('li');
  taskListItem.textContent = taskValue;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginLeft = '15px';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      taskListItem.remove();
    }
  });

  taskListItem.appendChild(checkbox);
  taskListItem.appendChild(deleteButton);
  addTask.appendChild(taskListItem);
  taskInput.value = '';
}