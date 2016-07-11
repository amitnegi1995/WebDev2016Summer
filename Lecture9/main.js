/**
 * Created by championswimmer on 08/07/16.
 */

var myPara, paras, pp;
var stopButton;
window.onload = function () {
     myPara = document.getElementById('mypara');


     paras = document.getElementsByClassName('paraclass');
     pp = document.getElementsByTagName('p');
    pc = document.querySelectorAll('p.paraclass');
    myPara.style.left = '10px';
    stopButton = document.getElementById('btn');

    stopButton.addEventListener('click', function () {
        console.log('ev1')
    });

    stopButton.addEventListener('click', function () {
        console.log('ev2')
    });



};

$().ready(function () {

})

var myArr = [
    "a",
    "b",
    "c",
    "d"
];







