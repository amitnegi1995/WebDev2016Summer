/**
 * Created by championswimmer on 06/07/16.
 */

function counter (num) {
    var myNum = num;

    return {
        increment: function (step) {
            num = num+step;
            return num;
        },
        decrement: function (step) {
            num = num-step;
            return num;
        },
        currentvalue:  function () {
            return num;
        }
    }

}

var myCounter = counter(10);
console.log(myCounter.increment(2));
console.log(myCounter.increment(3));
console.log(myCounter.decrement(1));

var sixCounter = counter(6);
console.log(sixCounter.increment(4));


function linkifier (scheme) {
    return function (domain) {
        return scheme + '://' + domain
    }
}

var httpfier = linkifier('http');
var httpsifier = linkifier('https');

console.log(httpfier('google.com'));
console.log(httpsifier('google.com'));
