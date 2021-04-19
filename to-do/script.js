const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerButton = document.querySelector('.header-button');

let todoData = [];

if (localStorage.getItem('todo')) {
    todoData = JSON.parse(localStorage.getItem('todo'));
    render();
}

function render() {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function() {
            item.completed = !item.completed;
            localStorage.setItem('todo', JSON.stringify(todoData))
            render();
        });
        
        const binBtn = li.querySelector('.todo-remove');
        binBtn.addEventListener('click', function() {
            const index = todoData.indexOf(item)
            console.log(index);
            
            if (index > -1) {
                todoData.splice(index, 1);
                localStorage.setItem('todo', JSON.stringify(todoData))
            }
            render();
        });
    });
};

function start() {
    const newTodo = {
        value: headerInput.value,
        completed: false
    };

    if (headerInput.value !== '' && headerInput.value.trim() !== '') {
        todoData.push(newTodo);
        headerInput.value = '';
    }
    render();

    localStorage.setItem('todo', JSON.stringify(todoData))
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    start();
});

window.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        start();
    }
    render();
});

render();
