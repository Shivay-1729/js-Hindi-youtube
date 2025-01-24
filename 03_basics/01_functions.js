function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");
}

//sayMyName()

// function addTwoNumber(number1, number2){
//  console.log(number1+number2);
 
// }

function addTwoNumber(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
   }
const result = addTwoNumber(3,5)

//console.log(result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//const result1 = loginUserMessage("Saurabh")


console.log(loginUserMessage());
