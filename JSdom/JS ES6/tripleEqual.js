// always use ===
// equal comparison doesn't work for non-primitive
const first = [34,56,86,34];
const second = [34,5,45];
if(first === second){
    console.log('Equal');
}else{
    console.log('Not Equal');
}
//  In case of non primitive Data , Triple equal check the reference of memory. 
// Triple equal check the type of Data. 
//  the difference of double and triple equal is Type coercion