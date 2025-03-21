// for of

//["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for(const num of arr ){
    // console.log(i);
     
}

const greetings = "Hello World!"
for (const greeting of greetings) {
   // console.log(` char in greetings is ${greeting}`);
    
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")

//console.log(map);

for (const key of map) {
  //  console.log(key);
    
}

for (const [key, value] of map) {
   // console.log(key,':-', value);
    
}
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


