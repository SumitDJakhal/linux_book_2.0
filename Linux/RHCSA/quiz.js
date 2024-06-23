function addTask(inputId) {
    const taskInput = document.getElementById(inputId);
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        const label = document.querySelector(`label[for="${inputId}"]`).textContent;
        li.textContent = `${label }: ${ taskText}`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

