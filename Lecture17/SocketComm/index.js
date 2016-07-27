/**
 * Created by championswimmer on 25/07/16.
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();

const server = http.Server(app);

const io = socketio(server);

io.on('connection', function (socket) {
    console.log('A user is connected');
    socket.on('chat', function(data) {
        
        io.emit('chat', data)
    })
    
});

app.use('/', express.static(__dirname + '/public_html'));

server.listen(3000);
