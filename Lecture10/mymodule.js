
let myModule = {};
console.log('My module'); 

let privVariable = 20;

function myOtherFunction (num) {
    return num + 5;
}

myModule.a = 10 + privVariable;

myModule.myFunction = function (arg) {
    console.log('module function ' + privVariable);
    
    console.log(myOtherFunction(arg))
};

module.exports = myModule;
