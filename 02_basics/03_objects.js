// singleton

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]:"mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]


}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"]);
// console.log( Jsuser[mySym]);

// Jsuser.email = "Hitesh@chatgpt.com"
// console.log(Jsuser.email);
// Object.freeze(Jsuser)

// Jsuser.email = "Saurabh@chatgpt.com"
// console.log(Jsuser.email);

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());





