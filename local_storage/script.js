const addItem = () => {
  const itemName = document.getElementById("itemName");
  const itemValue = document.getElementById("valueName");
  const name = itemName.value;
  const value = itemValue.value;
  console.log(name, value);
  itemName.value = "";
  itemValue.value = "";

  displayProducts(name, value);
  saveProductToLocalStorage(name, value);
};

const displayProducts = (name, value) => {
  const productList = document.getElementById("selected-products");
  const li = document.createElement("li");
  li.innerText = `${name} :  ${value}`;
  productList.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (name, value) => {
  const cart = getStoredShoppingCart();
  cart[name] = value;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductsFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for (const name in savedCart){
        const value = savedCart[name];
        console.log(name,value);
        displayProducts(name,value);
    }
}

displayProductsFromLocalStorage();
