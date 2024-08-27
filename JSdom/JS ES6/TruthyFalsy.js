// Truthy
 /* 
 1. true
 2. any number (+ ve, -ve) will be truthy other than 0
 3. any string other than empty string 
 4. '0' , 'false'
 5. {}
 */
// Falsy
/* 
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/



const y = '';
if(!y){
    console.log('value is falsy');
}
const x = ' ';
if(!!x){
console.log('Truthy')
}