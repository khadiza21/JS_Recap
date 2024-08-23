let x = 10; //variable declaration in global scoped
//function level scope
function myFunction() {
  let y = 20;
  {
    let z = 30;
    console.log(x); //10
    console.log(y); //20
    console.log(z); //30
  }
  console.log(x); //10
  console.log(y); //20

  // not working z is declared in block scope

//console.log(z); //undefined
}
myFunction();
console.log(x); //10;
//not working y is declared in another block/function body
//console.log(y); //undefined
//not working z is declared in another block
//console.log(z);//undefined//
