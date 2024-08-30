/* 
Scope
Scope determines the accessibility (visibility) of variables.
JS has 3 types of scope: 
(Block scope, Function scope, Global scope)
*/

// global scope 
let year = '2034'

// function scope
function theYear(){
    let text = "The year is ";
    return text + " " +year;
}
// block Scope
if(10<20){
    let greeting = "hi";
    return greeting;
}