let fruits = ['apple' , 'banana', 'orange', 'cerry', 'mango'];
console.log(fruits[2])
fruits[1] = 'Jambura';
console.log(fruits); 

// add or remove elements
let tourist = ['shilong', ' himaloy', 'sajek' , 'cox bazar', ];
console.log(tourist);
tourist.push('jaflong','ruppur');
console.log(tourist);
tourist.pop()
console.log(tourist)

// checking array membership with 'includes'
let books = ['c','c++','Java', 'python' ];
let checkRes=books.includes("JavaScript");
console.log(checkRes);

// combining arrays
let array1 = [ 1,2,3,4, 5,6,7,8,9,10];
let array2 = ['one ', 'two', 'three','four'];
let combineArray = array1.concat(array2);
console.log(combineArray);
