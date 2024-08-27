/* 
map ==> loops through each element of the array and 
do the operation that passed in the call back function and
hold the result from each operation in an array and
finally returns the array.
*/

const numbers = [3, 5, 6, 6, 7, 3, 1, 9];
function doubleIt(num) {
  console.log("num now ", num);
  return num * 2;
}

const result = numbers.map(doubleIt); //return array
console.log(result);

const double2 = numbers.map((n) => n * 2); //Map  take  the ( numbers ) array and do the task from arrow function for all element of numbers array  and will return a array .

// near to map : for each, filter, find
// for each - like map but don't return
const res = numbers.forEach((n) => console.log(n));
// filter - selects elements based on  a condition and returns an array with the elements that fulfilled the condition.
const filterRes = numbers.filter((p) => p > 4); //filter return array , if element is empty then will give empty array
console.log("filterRes ", filterRes);

const friends = ["Tom", "John", "Oliver", "Tim"];
const oddFriends = friends.filter((friend) => friend.length % 2 !== 0);
console.log(oddFriends);

// find - give only one element. If more than one then will give first element. If have no element then give undefined.
const selected = friends.find((friend) => friend.length % 2 !== 0);
console.log(selected);

// Reduce
const nums = [23, 34, 45, 23, 67];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
