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

// delete object entries/property
delete myObj.estd;
console.log(myObj);

// delete entries/property
const {ranking , ...shortObje} = myObj; //here deleted the ranking property from myObj Object. and use rest operator for getting rest object property.

// object Freeze (any update , add , delete not occurs by using freeze)
Object.freeze(myObj);
myObj.price =  343434;
delete myObj.name;

//  object seal (only update allow, add/delete will not allow )
Object.seal(myObj);
myObj.price = 23323;
myObj.founder = 'C A';





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


// default parameter value
function myFunc ( x= 10){
    return x; 
}
console.log(myFunc(undefined));
console.log(myFunc());
console.log(myFunc(null));