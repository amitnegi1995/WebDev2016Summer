/**
 * Created by championswimmer on 15/07/16.
 */

$('#addtodo').click(function () {
    var newTodo = {
        task: $('#newtodo').val()
    };
    $.post('/addtodo', newTodo,
        function (data, status) {
        console.log(data);
            $('#todolist').html('');
            for (todo of data) {
                $('#todolist').append(
                    '<li>' + todo.task + '</li>'
                );
            }
    })
});