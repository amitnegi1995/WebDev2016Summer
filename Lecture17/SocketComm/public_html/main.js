/**
 * Created by championswimmer on 25/07/16.
 */

const socket = io();

$(function () {

    const username = prompt("Enter username");

    $('#submitchat').click(function () {
        socket.emit('chat', 
            {
                user: username,
                msg: $('#chatmessage').val()
            })
    });

    socket.on('chat', function (data) {
        $('#chatbox').append(data.user
            + ': ' + data.msg + '<br>')
    })
});