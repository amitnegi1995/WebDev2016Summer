/**
 * Created by championswimmer on 06/07/16.
 */

function Fruit() {
    this.color = "yellow";
    this.taste = "sweet";
}

var apple = new Fruit();
//apple.makeSour();

Fruit.prototype.makeSour = function () {
    this.taste = "sour";
};

var str = new String('hello');
console.log(str);
apple.makeSour();
console.log('mango');

var mango = new Fruit();
console.log(mango);
console.log(mango.color);
console.log(mango.taste);
mango.makeSour();
console.log(mango.taste);

var a = {a: 10, b: 'string'};
var fruits = {mango, apple};
console.log(fruits);

var moreFruits = Object.create(fruits);
console.log(moreFruits);

console.log(a);
console.log(JSON.stringify(a));
var jsonString = JSON.stringify(a);
var b = JSON.parse(jsonString);
console.log("b");
console.log(b);













