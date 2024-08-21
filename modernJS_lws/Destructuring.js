/* Destructuring in JavaScript is a powerful feature that allows you to unpack values 
from arrays or properties from objects into distinct variables. This syntax provides
a concise and readable way to extract data from these data structures. */

// ### Array Destructuring
// #### Basic Example
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log("new");

// #### Skipping Values
const numbers1 = [1, 2, 3, 4];
const [first1, , third1] = numbers1; //second element is skipped
console.log(first1); // Output: 1
console.log(third1); // Output: 3
console.log("new");

// #### Default Values
const numbers2 = [1];
const [first2, second2 = 10] = numbers2;
console.log(first2); // Output: 1
console.log(second2); // Output: 10
console.log("new");
// `second` is assigned a default value of `10` because the array doesn't have a second element.

//### Object Destructuring
// allows to unpack properties from an object into variables.

// #### Basic Example
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log("new");

// #### Renaming Variables
// rename the variables when destructuring:
const user1 = { name: "Alice", age: 25 };
const { name: userName, age: userAge } = user1;
console.log(userName); // Output: Alice
console.log(userAge); // Output: 25
console.log("new");

// #### Default Values
const user2 = { name2: "Alice" };
const { name2, age2 = 30 } = user2;
console.log(name2); // Output: Alice
console.log(age2); // Output: 30
console.log("new");

// #### Nested Object Destructuring
const user3 = {
  name3: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
};
const {
  name3,
  address: { city, zip },
} = user3;

console.log(name3); // Output: Alice
console.log(city); // Output: New York
console.log(zip); // Output: 10001
console.log("new");

// ### Destructuring in Function Parameters
// #### Array Destructuring in Function Parameters
function greet([firstName, lastName]) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greet(["John", "Doe"]); // Output: Hello, John Doe!
console.log("new");

// #### Object Destructuring in Function Parameters
function printUserInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printUserInfo({ name: "Alice", age: 25 }); // Output: Name: Alice, Age: 25
console.log("new");



let x = 5;
let y = 6;
console.log(x,y);
[x,y] = [y,x]; //here value will set index wise
console.log(x,y);

/* Array Destructuring: Unpacks values from arrays into variables, supports skipping values and setting default values.
Object Destructuring: Unpacks properties from objects into variables, supports renaming variables, setting default values, and destructuring nested objects.
Function Parameters: Destructuring can be used directly in function parameters to make your code more concise and readable.  */
