let number = 0;
const clockID = setInterval(() => {
    number++;

    if(number>8){
        clearInterval(clockID);
    }
    console.log(  number)
    
}, 2000);