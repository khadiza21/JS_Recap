//  array.prototype.slice()
var numbers = [0,1,2,3,4,5];
var result1 = numbers.slice(2,4); // from 2 no index before the 5 no index will removed elements
var result2 = numbers.slice(-1,-2);
var result3 = numbers.slice(-2,4);
var result4 = numbers.slice(3,-4);
var result5 = numbers.slice();//0,0
console.log(result1, "\n" , result2, "\n" ,result3, "\n" ,result4, "\n" ,result5 );
console.log("Running ......")

// array.prototype.splice()
var result = numbers.splice (1,2,10,12,13,19);
console.log(numbers); //cut and add
console.log(result); // give the value which cut 
var res = numbers.splice (-1,2,10,12,13,19);
console.log(result);
console.log(res);

array2 = ['a','b','c','d','c','e','f','g']
let newArr1 = (array2.splice(5,2)); //here delete count is 2 elements. so two elements removed and the starting index is 5
console.log(array2)
console.log(newArr1)
let newArr = array2.splice(2)//form index no 2 removed all elements
console.log(array2)
console.log(newArr);
// output
// [ 'a', 'b', 'c', 'd', 'c', 'g' ]
// [ 'e', 'f' ]
// [ 'a', 'b' ]
// [ 'c', 'd', 'c', 'g' ]