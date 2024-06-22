
// function sayMyName(){
//     console.log("R");
//     console.log("R");
//     console.log("R");
//     console.log("R");
//     console.log("R");
//     console.log("R");
// }
// sayMyName()

// function addtwoNumber(no1,no2){
//     console.log(no1+no2);
// }
// addtwoNumber(3,null)

// function addTwono(no1,no2){
//     // let rresutl=no1+no2
//     // return rresutl
//     return no1+no2
// }
// addTwono(2,3)

// function loginUser(usernmae="Raman"){
//     if(usernmae === undefined){
//         console.log("Please Enter an username");
//         return;
//     }
//     return `${usernmae} Just logged in`
// }
// // console.log(loginUser("ROhit"));
// console.log(loginUser(""));//it gives undefined as output

// function calculateCartPrice(...num1){ // this is rest operator where multiple values can be added
//     return num1
// }
// console.log(calculateCartPrice(100,200,300));

// const user={
//     username:"hitesk",
//     prcie: 100
// }
// function handleobject(obje){
//     console.log(`Username is ${obje.username} and price is ${obje.prcie}`);
// }
// // handleobject(user)
// handleobject({
//     username:"rohit",
//     price:399
// })
const myarrya=[1,2,4,5,6]
function returnSeocndVal(getArray){
    return getArray[1]
}
console.log(returnSeocndVal(myarrya));
console.log(returnSeocndVal([200,300,400]));
