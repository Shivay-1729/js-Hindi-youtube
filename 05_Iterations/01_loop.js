 // for

for (let i = 0; i < 5; i++) {
   // const element = i;
   // console.log(element);
    for(let j = 0; j< 5; j++){
       // console.log(`Inner loop ${j} and outer loop ${i}`);
      // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
    
}

// break and continue

for (let index = 0; index < 10; index++) {
    if(index == 5){
        break;
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 0; index < 10; index++) {
    if(index == 5){
        continue;
    }
    console.log(`value of i is ${index}`);
    
}