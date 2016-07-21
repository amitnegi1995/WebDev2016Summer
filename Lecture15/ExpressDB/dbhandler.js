/**
 * Created by championswimmer on 20/07/16.
 */
var mysql      = require('mysql');

var connection = null;

function createConnection () {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'todouser',
        // password : 'secret',  
        database : 'tododb'
    });
}

function addTodo(newTodo, doneCb) {
    createConnection();
    connection.connect();
    var queryString =
        'INSERT INTO todolist VALUES(' +
            newTodo.id +
            ', ' +
            '"' + newTodo.task + '"' +
            ', ' +
            newTodo.done +
            ');';
    // INSERT INTO todolist VALUES(2, "some task", 0);
    
    connection.query(queryString, function (err, result) {
        if (err) throw err;
        doneCb(result);
    });

    connection.end();
}

function fetchTodos (doneCb) {
    createConnection();

    connection.connect();

    connection.query('SELECT * from todolist', function(err, rows, fields) {
        if (err) throw err;
        doneCb(rows)
    });
    connection.end();

}


module.exports = {
    fetchTodos: fetchTodos,
    addTodo: addTodo
};