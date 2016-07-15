/**
 * Created by championswimmer on 15/07/16.
 */
$("#gethello").click( function () {
    var name = $("#name").val();
    $.get('/hello?name='+name, function (data, status) {
        $("#message").html(data)
    })
});
