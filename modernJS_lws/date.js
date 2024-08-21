const today = new Date();
const date = new Date('2062-10-30');

console.log(today);
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2096,0,26);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

// date to convert sec : by unix epoc 
// Time zone : UTC, Moment JS (date time convert, format)