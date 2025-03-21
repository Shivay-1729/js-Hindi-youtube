const myNums = [1, 2, 3]

//  const myTotel = myNums.reduce(function (acc,currval){
//   console.log(`acc:${acc} and currval:${currval}`);
  
//     return acc+currval
//  },0)

//const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)

 //console.log(myTotal);

 const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"pys course",
        price:1999
    },
    {
        itemName:"java course",
        price:9999
    },
    {
        itemName:"c++ course",
        price:4999
    },
 ]

 
 const myTotal = shoppingCart.reduce((acc,item) => acc+item.price,0)

 console.log(myTotal);
 