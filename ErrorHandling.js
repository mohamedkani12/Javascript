//"use strict definitely follow syntax"
"use strict";
const variable="Mohamed";
//variable = "Mohamed" ; //Error reference error 
console.log(variable);

const makeError = ()=>{
  try{
    let name = "Mohamed";
    name = "Mohamed Kani";
    console.log(name);
    let age = 19;
    console.log(age);
  }
  catch(err){
    console.error(err.name);
  }
};

makeError();
 // custome Error
const makeError1 = ()=>{
  try{
    throw new customError("This is custom Error");
  }
  catch(err){
    console.error(err.stack);
  }
};

 function customError(message){
  this.message = message;
  this.name = "Custom Error";
  this.stack = `${this.name}:${this.message}`;
 }

makeError1();

//inbuild customError
const makeError2 = ()=>{
  try{
    throw new Error("This is custom Error");
  }
  catch(err){
    console.error(err.stack);
  }
};

makeError2();

const makeErrorWithFinally = ()=>{
  let i = 1;
  while(i<=5)
  {  
    try{
      if(i%2!==0)
        throw new Error("Odd Number");
      console.log("Even number");
    }
    catch(err){
      console.log(err.message)
    }
    finally{
      console.log("i : ",i);
      i++;
    }
  }  
};

makeErrorWithFinally();