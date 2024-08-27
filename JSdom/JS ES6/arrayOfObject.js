const books =[
    {id: 1, name:'JS' , price: 534},
    {id: 2, name:'CPP' , price: 634},
    {id: 3, name: 'Python', price: 334},
    {id: 4, name: 'Java', price: 234}
];

const mapRes = books.map( book => book.name );
console.log('Map Result ', mapRes) //Map Result  [ 'JS', 'CPP', 'Python', 'Java' ]

 books.forEach(book => console.log(book.price));

/* 534
634
334
234 */

const findRes = books.find(book => book.price > 400);
console.log('Find Result ', findRes);
// Find Result  { id: 1, name: 'JS', price: 534 }

const filterRes = books.filter(book => book.price > 400);;
console.log('Filter Result ', filterRes);
/* Filter Result  [
    { id: 1, name: 'JS', price: 534 },
    { id: 2, name: 'CPP', price: 634 }
  ] */





