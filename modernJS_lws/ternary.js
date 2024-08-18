var age = 19;
var type = age >= 18 ? "adult" : age < 10 ? "child " : " young";
console.log (type);


var fruits = "apple";
var checkFruit = fruits === 'apple' // ? true : false; // if here have true and false then don't need to write tru and false 

console.log(checkFruit);
let isLeader = true;
let price = 5000; 
price = isLeader === true ?  price > 1000 ? price/2 : 0 :  price+1000;
console.log(price)