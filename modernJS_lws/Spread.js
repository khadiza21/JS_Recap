/* In JavaScript, the spread operator (...) is a powerful tool that allows  
to spread the elements of an array, object, or other iterable into a new array or object. 
It can be used in various contexts, such as copying arrays, concatenating arrays, 
spreading elements as function arguments, and more. */

// Spread in Arrays
// Example: Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // here the shallow copy of  orginal Array
console.log(copiedArray); // Output: [1, 2, 3]

// Example: Concatenating Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // merge 2 array here
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example: Spreading Elements as Function Arguments
function add(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = add(...numbers); //unpacking the numbers array element
console.log(result); // Output: 6

// Spread in Objects
// Example: Copying an Object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { a: 1, b: 2 }

// Example: Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// Spread with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
