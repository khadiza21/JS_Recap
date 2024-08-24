// option 3
const makeBlueBtn = document.getElementById("makeBlue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "lightBlue";
}

// option 4 by eventListener
document.getElementById("makePurple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});

function handleOnclick() {
  document.getElementById("jsDom").innerText =
    "Text Changed by Onclick handling.";
}

document
  .getElementById("handleEventListener")
  .addEventListener("click", function () {
    document.getElementById("jsDom").innerText =
      "Text Changed by addEventListener.";
  });

//   inputField,type
const mainEvent = document.getElementById("event");
const eventSearch = document.createElement("div");
const p = document.createElement("p");

const newAdd = `<input id="inputField" type="text" /> <button id="type">Type</button>`;

eventSearch.id = "eventSearch";
p.id = "newText";
p.innerText = "JavaScript is a Programming Language.";

mainEvent.appendChild(eventSearch);
eventSearch.appendChild(p);
eventSearch.innerHTML += newAdd;

document.getElementById("type").addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  inputField.style.backgroundColor = "red";
  const inputText = inputField.value;
  console.log(inputText);
  const p = document.getElementById('newText');
  p.innerText = inputText;
  inputField.value="";
});
