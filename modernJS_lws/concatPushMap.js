// array.prototype.concat()

var nums1 = [1,2,3,4,5,6];
var nums2 = [6,7,8,9,10];
var nums3 = [12,23,12,5,23];

var result = nums1.concat(nums2,nums3);
console.log(result);



// array.prototype.push()
console.log("Push Method")

var result1 = nums1.push(90,34,55, [23,'23','sdsdsd']); 
console.log(nums1)
console.log(result1);
var result2 = nums1.push([23,'23','sdsdsd']); 

console.log('New')
console.log(nums1)
console.log(result2);


// array.prototype.map()
var res = nums1.map( num => {
    return 2 * num;
})
console.log(res); 
// map return a new array with the same length as the original array . not return modified array. 
// map() is often used for transforming data, such as converting an array of objects into an array of specific property values.
// syntax: array.map(callback(currentValue, index, array), thisArg); ---- callback function -called for each element in the array.
