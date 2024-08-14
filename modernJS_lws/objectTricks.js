// important object methods 
var myObj = {
    name: 'JS', 
    founder: "B E",
    estd: "1995", 
    ranking: 1,
};
const keys = Object.keys(myObj);
const values = Object.values(myObj);
const entries = Object.entries(myObj);


console.log(keys , '\n' , values , '\n' , entries) ;



// Object Shorthand
var x = 4; 
var y = 5;

var z = x*y;

var myObj1 = {
    name: 'JS', 
    founder: "B E",
    estd: "1995", 
    ranking: 1,
    // x:x,
    // y:y, 
    // z:z
    x,
    y,
    z
};
//  if the value is same in the object value with outside value then only keys name need to write . 
const keys1 = Object.keys(myObj1);
const values2 = Object.values(myObj1);
const entries3 = Object.entries(myObj1);
console.log('\n','New line ', '\n' ,keys , '\n' , values , '\n' , entries) ;
console.log(myObj1.x);