/**
 * Created by championswimmer on 13/07/16.
 */

var express = require('express');
var app = express();
var userdetails = {};

var fs = require('fs');

//localhost:5000

// respond with "hello world" when a GET request is made to the homepage
// http://localhost:5000/
app.get('/', function(req, res) {
    res.send('hello world');
});
app.get('/adddetails', function (req, res) {
    if (req.query.name != 'null') {
        userdetails.name = req.query.name;
    }
    if (req.query.age != 'null') {
        userdetails.age = req.query.age;
    }
    res.send("Details added");
    fs.readFile('./mytodos', function (err, data) {
        if (err == 'null') {

        } else {
            res.send(data);
        }
    })

});
// http://localhost:5000/userdetails
app.get('/userdetails', function (req, res) {
    res.send(userdetails);

});

app.listen(5555, function () {
    console.log('Server is up')
});
