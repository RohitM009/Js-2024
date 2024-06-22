// const user={
//     username: "rohit",
//     price : 999,

//     welcomemsg: function(){
//         console.log(`${this.username},welcome to webiste`);
//         console.log(this);
//     }
// }

// user.welcomemsg()
// user.username="Raman"
// user.welcomemsg()
// console.log(this); //gives empty output

// function chai(){
//     let username="rohit"
//     console.log(this.username);
// }
// //this is not working in function it give undefined 
// chai()

// const chai=function(){
//     let user="rohit"
//     console.log(this.user);
// }
// chai()


// const chia= ()=>{
//     let user ="rohit"
//     console.log(this);//here also it gives undeifned value
// }
// chia()

// const addtwo=(no1,no2)=>{
//     return no1+no2
// }
// console.log(addtwo(3,5));

// const addtwo=(no1,no2)=> no1+no2
// const addtwo1=(no1,no2)=> (no1+no2)
//when you use curly braces have to use return 
//in other barces or without braces dont need not to use return
// console.log(addtwo(3,5));

const two=()=> ({name:"rohit"})
console.log(two());


const myArray=[1,2,3,4,5]
myArray.for