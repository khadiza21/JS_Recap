//  array.prototype.slice()
var numbers = [1,2,3,4,5];
var result1 = numbers.slice(2,4);
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
 