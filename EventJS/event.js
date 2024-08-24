// option 3
const makeBlueBtn = document.getElementById('makeBlue');
makeBlueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'lightBlue';
}

// option 4 by eventListener
document.getElementById('makePurple').addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple'
})
