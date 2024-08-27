/* 
8 ways to get Undefine
1. variables that is not initialized will give undefined
2. Function with no return 
3. Parameter that is not passed will be undefined 
4. If return has nothing on the right side will return undefined
5. Property that doesn't exists on an object will give you undefined
6. Accessing array elements outside of the index range
7. Deleting an element inside an array . If need to out an element should to use splict().
8. Set a value directly to undefined . need to set Null instead if null.
*/
console.log(typeof undefined); // undefined
console.log(typeof null); // object . It maybe js limitation. 