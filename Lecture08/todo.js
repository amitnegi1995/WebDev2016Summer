/**
 * Created by championswimmer on 06/07/16.
 */

var todos = [];

window.onload = function () {
    var mTodos = localStorage.getItem('todos');
    if (mTodos != null) {
        todos = mTodos.split(',')
    }
    showTodos();
};

function addTodo() {
    var newTodo = document.getElementById('newtodo').value;
    todos.push(newTodo);
    saveTodos();
    showTodos()
}
function saveTodos () {
    localStorage.setItem('todos', todos);
}

function setStrike (el) {
    el.setAttribute('style', 'text-decoration: line-through');
}

function showTodos() {
    var todosToShow = '';
    var todoList = localStorage.getItem('todos');
    todos = todoList.split(',');
    for (todo of todos) {
        todosToShow +=
            '<li onclick="setStrike(this)">' + todo + '</li>'

    }
    
    document.getElementById('mytodos').innerHTML = todosToShow;
}
