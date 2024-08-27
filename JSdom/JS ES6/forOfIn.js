// for of use for array and string 
// for in use for object.
let object = {
	name : "Petya",
  	age : 15
};
for (const key in object){
    const value = object[key];
    console.log(key,value);
}

// optional
// array is support 'for of' , it are not used for object . 
const keys = Object.keys(object); // object convert into array with object key
console.log(keys);// 

for (const key of keys){
    console.log(key); // apply for of in object keys. 
}