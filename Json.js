//JSON -> Javascript Object Notation . it is text format.
//To send and receive data in many programming language.

const myObj = {
  name : "Mohamed",
  content : ["Earn","Grow","Give"],
  sayHello : function(){
    console.log("Thanks for Sharing Channel")
  }
};

console.log(myObj);
console.log(typeof myObj);
const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);

const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);
console.log(typeof receiveJson);