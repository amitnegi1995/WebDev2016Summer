/**
 * Created by championswimmer on 07/08/16.
 */
$(function() {
    $("#loginbtn").click(function () {
        $.post('/login', {
            username: $('#user').val(),
            password: $('#pass').val()
        }, function(data, status) {
            $('#loginstatus').html(data)
        })
    })
});