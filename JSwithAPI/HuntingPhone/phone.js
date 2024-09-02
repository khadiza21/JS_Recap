const loadPhones = async (searchText) => {
  const res = await fetch(`./phones.json?search=${searchText}`);
  const data = await res.json();
  const phones = data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phoneContainer");
  phoneContainer.textContent = '';
  phones = phones.slice(0,5)
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = ` 
       <figure class="px-10 pt-10">
            <img
              src="${phone.image}" 
              alt="Phone"
              class="rounded-xl" />
          </figure>
          <div class="card-body ">
            <h2 class="card-title  text-center text-gray-800">${phone.name}</h2>
            <p class="text-gray-500">${phone.description}</p>
            <p class="text-gray-600 font-bold">Price: ${phone.price} $</p>
         
          </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
};


const handleSearch = () =>{
  const searchField = document.getElementById('searchField');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhones(searchText);
}

