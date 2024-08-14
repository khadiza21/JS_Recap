// array.prototype.find()

// syntax
//array.find(callback(element, index, array), thisArg);

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 4;
}, this); //here also have this because in a function need to use this to use construct /object property. When use array function then don't need uses "this" keyword behaves differently. Arrow functions don't redefine "this" as their semantics are different. 

console.log(numbers);
console.log(result);
/* In find have a function which consist 3 peremeter current value of iteration , current index of array/list, and the array. When match then  condition or get true then return the value and stop. It don't change the value of array  */

// array object 
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  const foundUser = users.find(user => user.name === 'Bob');
  
  console.log(foundUser);
  // Output: { id: 2, name: 'Bob', age: 30 }
  
 /*  find() returns the first object where user.name === 'Bob'. If no element satisfies the condition, it returns undefined. */


 const result1 = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 20; // if not have the indexValue then will return -1;

 });
 console.log(result1)