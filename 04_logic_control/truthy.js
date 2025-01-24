const userEmail = []

// if(userEmail){
//     console.log("GOT user email");
    
// }
// else{
//     console.log("Don't have user email");
    
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NAN

// Truthy values

// true, "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }
// else{
//     console.log("Don't have user email");
    
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// false == 0    (true)
// false == ''   (true)
// 0 == ''       (true)

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null?? 10
//val1 = undefined ?? 15
val1 = null ?? 20 ?? 30

//console.log(val1);

// Ternary Operator

//condition ? true :false

const icePrice = 100
icePrice >= 80 ? console.log("less than 80") : 
console.log("more than 80");



