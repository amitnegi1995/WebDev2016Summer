#!/usr/local/bin/node

const mymodule = require('./mymodule');
const data = require('./data');
const Fruit = require('./fruit');

console.log("Hello World");

console.log(mymodule.a);
mymodule.myFunction(20);
console.log(data[0].name);

let mango = new Fruit('yellow');
let apple = new Fruit();
console.log(mango.color);
console.log(mango.taste);
console.log(apple.color);
console.log(apple.taste);

function giveCallbackFuncAsync(cb) {
    let i = 0;
    while (i<9999999) {
        i++
    }
    cb();
}

setTimeout( function() {
  giveCallbackFuncAsync(function () {
    console.log('one')
});
},0);

console.log('continue');

setTimeout( function() {
  giveCallbackFuncAsync(function () {
    console.log('two')
});
},0);

console.log("end");
