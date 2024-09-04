# JavaScript

## What is JS?
### JS is a highly abstracted programming Language. 
- High Abstraction is a way of  hiding the implementation details and showing only the functionality to the users. Example: ATM Machine.
- High Abstract in JS
1. We don't have to handle resource management and memory allocation
2. We don't have to handle garbage collection.
3. Reduces details so that developers can focus on logic better. 
4. Improves understandability as well as maintainability of the code. 

#### Garbage Collection
- JS automatically collects unused data.
- Free the memory with the help of an algorithm called "Mark-And-Sweep".
- The garbage collector goes through the roots, marking (remembering) them on its way.
- It then moves on to the reference and marks them as well .
- The cycle continues until the garbage collector visits all the roots and reference.
- The garbage collector removes all the objects, except the marked ones.


### JS is JIT programming Language. 
- JS is not a purely interpreted lang.
- Modern JS is JIT complied.
- JUST-IN-TIME compiler converts the entire code into machine code and execute them immediately

### JS is a multi-paradigm programming Language. 
Paradigm: code structure that will  determine the style or a way of programming.
- Procedural Programming. (It involves writing down instruction. It tells the computer what it should do step-by-step.)

- Object Oriented Programming: It modeling a system as a collection of objects. Objects contain both function (or methods) and data.

- Functional Programming: An approach to software development that uses pure function. To create maintainable software.

### JS is a Proto-Typed based programming Language.
- In JS , everything (function , array, objects) is object except the primitive data.
- A prototypical object is an object used as a template from which to get the initial properties for a new object.
- Proto-type is a blue print.
- Example: Array prototype use Methods which are .push(), .pop(), .indexOf(). names.pop() inherit the names array property Pop Methods.

### JS is a Dynamically-Typed based programming Language.
- When you declare a variable , you do not need to specify what type this variable is.
- JS engine infers what type this variable is based on the value assigned to at run time. 
- As JS determines the type at runtime we can re-declare the type. 


## Basic JS Events All In One
#### M25-10
- What are events in web?
- Different types of events
- Signature of addEventListener
- onClick handler & addEventListener
- Dispatching an event/event chain / event propagation 
- Event capture vs event bubble 
- Stop event propagation
- Event delegation
- 3 steps of Event delegation 
- JS Event loop

## JS
1. How to use JS with html and css

2. Get element or elements form dom
    - getElementById, getElementByClassName,  querySelector,  querySelectorAll

3. dynamically add element to the dom: document.createElement 
    - set value to innerHTML

4. get and set value from/to a dom element
    - use innerText, use Value(input, textArea)

5. add event listener (event handler)
    - click, focus , blur , onchange, keyUp
    - addEventListener onclick = "myHandler()"
6. use function to reduce duplicate code 

7. event bubble and event delegate 

## JS ES6
1. Why JS called ES?
2. spread vs rest  vs destructuring
3. What is ES6? Have you ever used anything from ES6?
4. Explain the different between var, let and const.
5. What is the arrow function, and how to create it?
6. Give an example of an Arrow function in ES6? List down it's advantages.
7. Discuss spread operator in ES6 with an example.
8. What do you understand about default parameters?
9. What are template literals in ES6?
10. Tell us the difference between arrow and regular Function.
11. Tell us the difference between seal and freeze.
12. Tell us the difference between for...of and for...in.
13. Explain this keyword in JS 
14. Explain this keyword In JS class and other Places. 
15. What's the difference between map, for each , filter ?
16. What's the difference between and filter and find?
17. What's the difference between and for...of and for...in ?
18. How do you empty an array?
19. Difference between class and object.
20. What does destructing do in es6?
21. Is optional chaining is same as ternary operator?
22. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation?
23. What is Prototype chain? or How does inheritance work in JS? 
24. Why JS called Dynamic type language ?
25. Tell the difference Between Primitive and Non-Primitive Data Types in JS.
26. What are the Truthy and Falsy values? Give me some examples. 
27. What is the difference between null and undefined? *
28. What are the differences between double equal (==) and triple equal (===)? ***
29. What is scope in JS? *
30. Define block scope and global scope. **
31. What is hoisting in JS?
32. How to use the JS callback function? 
33. Explain closure in JS. ***
34. Explain passed by value and passed by reference. 


## API
1. What is an api?
2. What are the HTTP methods supported by REST?
3. Can you use GET request instead of PUT to create a resource?
4. What is the difference between PUT and POST?
5. What is JSON?
6. What are CRUD operations?
7. What is the file extension of JSON?
8. What are the data types supported by JSON?
9. What is the role of JSON.stringify? 
10. Show how to parse a JSON.
11. Tell us the difference between GET and POST.



 ## ** REST API Methods **
- GET : Receive information about an API resource . 
- POST: Create An API resource.
- PUT: Remove Previous data and set new data. If have no previous data Then set new data. (add New data ) 
- PATCH: Update Previous data. (Partially update existing data)
- DELETE: Delete an API resource. 


CREATE, READ , UPDATE, DELETE : CRUD


Client side req server connect database 
