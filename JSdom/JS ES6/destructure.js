/* 
Object and Array Destructuring .
- Technique for unpacking objects, arrays, and assigning them to variables.
- Helps to deal with function that have a  lot of parameters, default values. 
- Is convenient to write, easy to maintain and friendly to read.
- saves from writing repetitive code.
*/

// object Destructuring
/* 

1. property to variable
const {props} = object;

2. multiple properties
const {prop1,prop2, .... , propN} = object;

3. default value 
const {prop = 'default } = object

4. alias
const {prop: myProp} = object

*/

const book ={name:'JS', price: 3434,author:'Bozlur' ,edition:'6th'}
const {name,price, author, edition: publish} = book; // name change of property
console.log(price, publish)

// array destructuring 
const numbers = [23,54,232,76,34,45];
const [x,y,z ] = numbers;
const [first,second,,third] = [23,23,4];

// destructuring with function
function numbers(){
    return [2,4,5,2,8];
}
let [num1,num3] = numbers();



