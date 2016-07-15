/**
 * Created by championswimmer on 04/07/16.
 */

//var globalVar = 'some text';

var op1;
var opr;
var op2;
myFunction = function (arg1, arg2) {
    window.alert('my function called'
        + ' with arg1 = ' + arg1)

    
};
setOperator = function (arg1) {
    op1 = document.getElementById('textbox').value
    document.getElementById('textbox').value = "";
    opr = arg1;
};
getEquals = function() {
    op2 = document.getElementById('textbox').value;
    if (opr == '+') {
        ans = op1 + op2;
    }
    
    document.getElementById('result').innerHTML = ans;
}
window.onload = function () {
    
    document.getElementById('mybutton').onclick = function () {
        var name = document.getElementById('namebox').value;
        window.alert('Hello ' + name);
    };

    var num = 10.1234;
    console.log(num.toFixed(2)) // 10.12

};

