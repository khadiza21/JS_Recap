class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("move");
  }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class Truck extends Bus{
    constructor(name, price, load){
        super(name,price);
        this.load = load;
    }
}

// 

/* 
JS use Prototypical Inheritance which refers to the ability 
to access object properties from another object. We use a 
JS prototype to add new properties and methods to an existing object
constructor . 
 */