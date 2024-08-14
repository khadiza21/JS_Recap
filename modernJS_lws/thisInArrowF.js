//  * This in arrow Function

// fat arrow function 
// 1. Arrow function make short, 
// 2. use this keyword in a function inside a object/etc. 
// call / bind not work in arrow function 
// 4. arrow function e new kaj korbe na and this k bairer this hisebe o  kaj kore


let number = (a,b) => {
    //other stuffs
    return a+b;
}


let javascript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function(){
      this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));

    },
}
javascript.printLibraries();


const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");


// normal function that works perfectly
function show() {
  display.innerHTML = this.value;
  var self = this;
  setTimeout(function(){
    thanks.innerHTML = `typed : ${self.value}`
  }, 1000)
} 




