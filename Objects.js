

const myObj = {
  name : "Mohamed"
};
myObj.age = 21;
console.log(myObj.name);
console.log(myObj["age"]);
const anotherObj = {
  subscriber : true,
  no : 10000,
  content : {
    earn : "Js",
    grow : "Stocks"
  },
  subDiv : ["Earn","Grow","Money"],
  action : function(){
    return  `Earn Learning by ${this["content"]["earn"]}` ;
  }
};
anotherObj.start = "21 Jan 2022";
console.log(anotherObj);
console.table(anotherObj);

console.log(anotherObj["content"]["earn"]);
console.log(anotherObj["subDiv"][2]);
console.log(anotherObj["action"]());


const vehicle = {
  doors : 2,
  engine : function(){
    return "Vroom!!"
  }
};
console.log(vehicle["engine"]());
const car = Object.create(vehicle);
console.log(car);
car.wheel = 4;
console.log(car.doors);
console.table(car);
console.log(car["wheel"]);

const movie = {
  actor: "kavin",
  director : "Lokesh",
  music : "Arr"
};
console.log("Music property in Movie : "+movie.hasOwnProperty("music"));
delete movie.music;
console.log("Music Property in Movie : "+movie.hasOwnProperty("music"));
console.log(Object.keys(movie));
console.log(Object.values(movie));
for(let job in movie){
  console.log(`${job} is ${movie[job]}`);
}
movie.music = "Arr";
//Destructuring Objects

const {music : myFavmusic , actor : myFavactor} = movie;
console.log(myFavactor);
console.log(myFavmusic);

const {music,actor} = movie;
console.log(music,actor);

function actorName({actor}){
  return actor;
}

console.log(actorName(movie));