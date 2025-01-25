//class

class Pizza{
  constructor(typePizza,typeSize,typeCrust){
    this.type = typePizza;
    this.size = typeSize;
    this.crust = typeCrust;
    this.toppings = [];
  }
  get toppingsPizza(){
    return this.toppings;
  }
  setToppingsPiza(topping){
    this.toppings.push(topping);
  }
  set CurstPizza(crust){
    this.crust = crust;
  }
  bake(){
    return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings}`);
  }
}

const anotherPizza = new Pizza("margarita","small","thin");
anotherPizza.setToppingsPiza("sausage");
anotherPizza.setToppingsPiza("PepperRoni");
anotherPizza.CurstPizza="Original"; 
anotherPizza.bake();

class SpecialPizz extends Pizza{
  constructor(typePizza,typeSize,typeCrust,price){
    super(typePizza,typeSize,typeCrust);
    this.price = price;
  }
  priceTotal(){
    return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust Pizza with ${this.toppings} and amount of ${this.price}`);
  }
}

const mySpecialPizza = new SpecialPizz("margarita","small","thin",500);
mySpecialPizza["priceTotal"]();
mySpecialPizza.amountEach = 600;
console.log(mySpecialPizza.amountEach);
console.table(mySpecialPizza)