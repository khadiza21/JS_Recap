/* In JavaScript, the reduce() method is used to execute a reducer function on each element of the array, resulting in a single output value. It's a powerful method that can be used for a wide variety of tasks, such as summing all elements in an array, flattening arrays, or even building more complex data structures from an array. */

// syntax
//array.reduce(callback(accumulator, currentValue, index, array), initialValue);

// Example: Summing an Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
// Output: 15


// Example: Flattening an Array
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6]
// reduce() can return any type of value, including objects and arrays.


