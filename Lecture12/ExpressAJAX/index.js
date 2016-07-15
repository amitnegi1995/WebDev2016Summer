/**
 * Created by championswimmer on 15/07/16.
 */

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

app.use('/', express.static('./public_html'));

let todoList = [];

app.get('/hello', function(req, res) {
    if (typeof req.query.name != 'undefined'
    && req.query.name != '') {
        res.send("Hello " + req.query.name)
    } else {
        res.send("Who the hell are you ?")
    }
});
app.post('/addtodo', function (req, res) {
    console.log(req.body);
    var newTodo = {
        task: req.body.task,
        done: false
    };
    todoList.push(newTodo);
    res.send(todoList);
});


app.listen(app.get('port'), function () {
    console.log('Server started on port : ' + app.get('port'))
});