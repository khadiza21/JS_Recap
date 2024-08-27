class Product {
  constructor(name) {
    this.name;
  }
  country = "Bangladesh";
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
const lenovo = new Product("BK");
console.log(lenovo);
lenovo.speak(" Her");
console.log(lenovo.country);

class Teacher {
  constructor(name, subject) {
    this.name = name, this.subject = subject;
  }

  
}
const english = new Teacher("Shamil", "English");
console.log(english);
