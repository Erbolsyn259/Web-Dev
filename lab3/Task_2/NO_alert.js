const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Create task text
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    
    // Add event listeners
    checkbox.addEventListener('change', function() {
        span.classList.toggle('completed', this.checked);
    });
    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    // Assemble the task
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Add to list
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = '';
    taskInput.focus();
}

// Add event listeners to existing tasks (for the demo tasks)
document.querySelectorAll('#taskList li').forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const span = li.querySelector('span');
    const deleteBtn = li.querySelector('.delete-btn');
    
    checkbox.addEventListener('change', function() {
        span.classList.toggle('completed', this.checked);
    });
    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});