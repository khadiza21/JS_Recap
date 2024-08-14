/* If we want to define the "this" keyword, we can say that it allows you to reuse functions with different contexts. "this" keyword is one of the weirdest parts of JavaScript. Often in larger applications, programmers find it difficult to figure out what "this" refers to. In this video, I have tried to explain 4 rules that would help you solve the problem. While explaining "this" keyword, I have also introduced "call()", "apply()" and "bind()" rather than creating separate tutorials for them. I hope you will find this video useful.

Implicit Binding
Explicit Binding (call)
Explicit Binding (apply)
Explicit Binding (bind)
new Binding
window Binding

N.B: in case of arrow function, the "this" keyword behaves differently. Arrow functions don't redefine "this" as their semantics are different.  */

// Implicit Binding
// 1
var sakib = {
  name: "sakib",
  age: 32,
  printPlayerName: function () {
    console.log(this.name);
  },
};
sakib.printPlayerName();

// 2
var printPlayerNameFunction = function (obj) {
  obj.printPlayerName1 = function () {
    console.log(this.name);
  };
};

var sakib2 = {
  name: "Sakib",
  age: 35,
};

var tamim = {
  name: "Tamim",
  age: 23,
};
printPlayerNameFunction(sakib2);
printPlayerNameFunction(tamim);
sakib2.printPlayerName1();
tamim.printPlayerName1();

// 3
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
        name: 'Rahim',
        printName: function(){
            console.log(this.name);
        }
    }
  };
};

var sakib1 = Person("sakib3", 34);
sakib1.printName();
sakib1.father.printName();




// explicit 

// Explicit Binding (call)
var printCar = function(color,price,brand){
    console.log(this.name, color, price, brand);
}
var honda = {
    name : "honda232",
    age: 35
};
var color = 'red';
var price = 123333;
var brand = 'honda';
var allthings = [ color, price, brand];
printCar.call(honda, color, price, brand); // call can pass multiple parameter but cann't pass array . Apply can pass array

// Explicit Binding (apply)
printCar.apply(honda, allthings)
// Explicit Binding (bind) - works like call . but it at first store value in an variable . 
var newFunc = printCar.bind(sakib, color, price, brand);
newFunc();



// new Binding (This)
// window Binding (This)