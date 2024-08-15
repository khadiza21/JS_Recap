/* rest parameter syntax (...) allows you to represent an indefinite number of arguments as an array.
 This is particularly useful in function definitions when you want to handle 
 a varying number of arguments, making your functions more flexible. */
// syntax
function functionName(...restParam) {
  // restParam is an array this contain all the extra arguments passed to function .
  // It must be the last parameter in func.
}

// Example : Summing Multiple Numbers
function sum(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

//   Example: Combining Fixed and Rest Parameters
function introduce(name, age, ...hobbies) {
  console.log(
    `My name is ${name}, I am ${age} years old, and I like ${hobbies.join(
      ", "
    )}.`
  );
}

introduce("Alice", 25, "reading", "traveling", "coding");
// Output: My name is Alice, I am 25 years old, and I like reading, traveling, coding.


function newStyleSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
console.log(newStyleSum(1, 2, 3)); // Output: 6


// Rest parameters gather multiple arguments into a single array.
// Rest parameters must be the last parameter in the function definition.
/* They are more flexible and powerful than the arguments object, 
allowing the use of array methods directly on the gathered arguments. */
