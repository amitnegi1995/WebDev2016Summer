const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users');
const md5 = require('md5');

const passport = require('passport');
const passportLocal = require('passport-local');

passport.use(new passportLocal(
    function (username, password, callback) {
        const user = users.findOne(username);
        if (user == null) {
            return callback(new Error("User not found"))
        }
        if (user.password == md5(password)) {
            console.log('User logged in');
            return callback(null, user)
        } else {
            return callback(null, false)
        }
    }
));

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

passport.serializeUser(function(user, cb) {
    if (user.username == null ) {
        cb(new Error())
    }
    cb(null, user.username);
});

passport.deserializeUser(function(username, cb) {
    let user = users.findOne(username);
    if (user != null) {
        cb(null, user);
    }
});


app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('./public_html'));

app.post('/register', function (req, res) {
    
});

app.post('/login', passport.authenticate('local'),
    function (req, res) {
        res.send("Successful login")
    }
);



app.listen(4000, function () {
    console.log('http://localhost:4000/')
});