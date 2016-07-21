/**
 * Created by championswimmer on 20/07/16.
 */
const express = require('express');
const dbhandler = require('./dbhandler');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
});
app.get('/showtodos', function (req, res) {
    dbhandler.fetchTodos(function (rows) {
        res.send(rows)
    });
});

app.get('/addtodo', function (req, res) {
   var newTodo = {
       id: req.query.id,
       task: req.query.task,
       done: 0
   };
   dbhandler.addTodo(newTodo, function(result) {
       res.send(result);
   })
});

app.listen(3000, function() {
    console.log('Express app running on port 3000');
});