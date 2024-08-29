// when a function have / called inside of  another function then it's a closures.
function stopWatch(){
let counter = 0;

return function(){
    counter++ ;
    return counter;
}

}
const watch1 = stopWatch();
const watch2 = stopWatch();
const watch3 = stopWatch();

for (let i =0 ; i<5; i++){
    console.log('Watch1 ',watch1())
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 2',watch2()
    
)
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 3',watch3()
    
)
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 2',watch2()
    
)
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 1',watch1()
    
)
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 3',watch3()
    
)
}
console.log('New Loop')
for (let i =0 ; i<5; i++){
    console.log('Watch 1',watch1())
    
}
