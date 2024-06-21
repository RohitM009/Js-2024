//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const no=100
// const no1=100.6
// const isLogged=false
// const outside=null
// let useremail //(undefined)
// const id=Symbol('123')
// const id2=Symbol('123')
// console.log(id === id1);

// const bigNo=234567834567n



//Reference (Non Primitive)
// Arrays, Objects, Functions

// const heros=['nagaraj','shaktiman','doga']
// let myinfo=
// {
//     name:"rohit",
//     age:21,
// }

// const myFunction = function(){
//     console.log("Hello World!");
// }

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// *************************************************************
// stack(primitive)  heap(non-primitive) 

let myname="rohit"
let anothername=myname
anothername="maske"
console.log(anothername);
console.log(myname);

let user1 ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="rohit@gamil.com"
console.log(user1.email);
console.log(user2.email);


