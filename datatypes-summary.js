// primitive

// 7 types : String ,Number , null, undefined, Symbol,
// BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

//console.log(id == anotherId);

//const bigNumber = 2233333333333n;


// Reference (non primitive)

// Array ,Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Saurabh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof heros);

myFunction();