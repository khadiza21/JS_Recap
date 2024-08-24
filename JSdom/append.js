// example 01
// 1. where to add
const placeList = document.getElementById("fruit");
// 2. what to be added
const li = document.createElement("li");
li.innerText = "Guava";
li.style.color = "blue";
li.style.padding = "20px";
li.style.margin = "20px";
li.style.listStyle = "none";
li.style.fontSize = "30px";
li.style.fontWeight = "bold";

// 3. add the child
placeList.appendChild(li);

// example 02
// 1. where to add
const mainContainer = document.getElementById("traversing");

// 2. what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
h1.style.textAlign = "center";
h1.style.color = "orange";
section.appendChild(h1);

const ul = document.createElement("ul");
section.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "Fucka";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Ice Cream";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Soup";
ul.appendChild(li3);

mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>Dress Name  </h1>
        <ul>
          <li>Shirt</li>
          <li>Pant</li>
          <li>Hat</li>
        </ul>
     
`;
mainContainer.appendChild(sectionDress)

