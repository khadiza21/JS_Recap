/* 
Three way to write array function 
- empty parenthesis
- without parenthesis
- parameter with parenthesis
*/
/* 
single  line arrow function - implcity - by default return .
multiline arrow function - explicity need to use  return  keyword. 
*/
 const sum = (a,b) => a+b; 

const max = Math.max(3,5,2,7,4,6);
console.log(max);
const numbers = [3,5,6,3,6,2,2,6,6];
console.log(...numbers)
const arrayMax = Math.max(...numbers);
console.log(Math.max(numbers)); //NaN-  need to use spread operator to get result
console.log(arrayMax);

const friends = [23,24,12,54,21];
const nums = friends;
nums.push(12);
console.log(friends); //[ 23, 24, 12, 54, 21, 12 ] 
/* 
In Js here Non Premetive like array nums indicate the address of friends array. Both address are same
. So nums and friends will give same result. 
Here need to use spread operator 
*/ 
console.log(nums)

const town = [...friends];
friends.push(100);
console.log(friends)
console.log(town);




