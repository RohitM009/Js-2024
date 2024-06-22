const no=[1,2,3,4]

// const myTotal=no.reduce(function(acc,curr){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+curr
// },0)
// console.log(myTotal);

// const myTotal=no.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay=shoppingCart.reduce((acc,curr)=> acc+curr.price,0)
console.log(pricetopay);