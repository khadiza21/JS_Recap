const person ={
    name: 'BK', job:'Developer', 2:'Second', 'sec-two':23
}
const job = 'job'
console.log(person.name); // direct by property
console.log(person['name']) // access via property name string
console.log(person[job]); // access via name in a variable
console.log(person['2']) // person.2 will give error. 
console.log(person['sec-two']) // person.sec-two will give error. 