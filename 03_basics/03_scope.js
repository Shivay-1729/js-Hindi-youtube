let a = 100
if(true){
    let a = 10
    const b = 20
   // console.log("INNER: ", a);
    
}
//console.log(a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
    
 two()
}

//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
      //  console.log(username + website);
        
    }
   // console.log(website);
    
}

//console.log(username);

// ******************INTRESTING***********
console.log(addOne(5));


function addOne(num){
    return num +1
}


addTwo(5)
const addTwo=function addTwo(num){
    return num+2
}


