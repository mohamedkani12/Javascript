//factory function
function Pizaa(size){
  const sizePiz = size;
  const crust = "Original";
  return {
    bake : ()=>console.log(`${sizePiz} size pizza with ${crust} crust`)
  } 
}
const myPizza = Pizaa("small");
myPizza.bake();
console.log(myPizza.crust); //un-defined

class Pizza{
  crust = "Original";
  #sause = "Tomato";
  constructor(sizeType){
    this.size = sizeType;
  }
  getCrust(){
    return this.crust;
  }
  setCrust(cr){
    this.crust = cr;
  }
  getSause(){
    return this.#sause;
  }
  bake(){
    return console.log(`${this.size} pizza with ${this.#sause} and ${this.crust} crust pizza`);
  }
}

const specialPizza = new Pizza("medium");
specialPizza.bake();
console.log(specialPizza.crust);
console.log(specialPizza.getSause());   
console.log(specialPizza.sause); //undefined
//console.log(specialPizza.#sause);  //Error
