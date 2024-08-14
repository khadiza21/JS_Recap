// for...in
/* 
 The for...in loop is used to iterate over the enumerable properties (keys) of an object.
  It is generally used with objects but can also be used with arrays (though it is not
   recommended for arrays). */

// syntax
// for (variable in object) {
//
//   }

//   exaple with Object Best used for iterating
const user = {
  name: "Alice",
  age: 25,
  city: "New York",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Output:
// name: Alice
// age: 25
// city: New York

/* Example with an Array (not recommended) because  it iterates over all enumerable 
properties, including prototype properties, which might not be what you expect. */
const numbers = [1, 2, 3, 4];

for (const index in numbers) {
  console.log(numbers[index]);
}

// Output:
// 1
// 2
// 3
// 4




// for...of
/*  The for...of loop is used to iterate over the values of iterable objects such as
 arrays, strings, maps, sets, and more. It is ideal for working with arrays and other
  iterable objects.*/

//   syntax
for (variable of iterable) {
  // variable consist current value
}

//   example with an array
const numbers1 = [1, 2, 3, 4];

for (const value of numbers1) {
  console.log(value);
}

// Output:
// 1
// 2
// 3
// 4


//   example with an string
const greeting = "Hello";

for (const char of greeting) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o


// Best used for iterating over the values of iterable objects.
// Does not iterate over object properties, only the values of arrays, strings, maps, etc.
// It respects the order of elements in arrays and other iterables.

