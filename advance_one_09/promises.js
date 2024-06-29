//promise creation
// const promisone= new Promise()

// const promisone=new Promise(function(resolve,reject){
//     //DO an async task
//     //DB call, cryptography ,newtwork related

//     setTimeout(function(){
//         resolve()
//         console.log('Async Taask is completed');
       
//     },1000)
// })

// //promise consumed
// promisone.then(function(){
//     console.log("PRomise Consumed");
// })
//another way to create and consume promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })


// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username:"Chai",
//             email: "rohit@gmail.com",
//             age:20
//         })
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

// const promiseFOur=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(error==true){
//             resolve({
//                 username:"Rohit",
//                 email: "rohit@gmail.com",
//                 age:20
//             })
//         }
//         else{
//             reject('Error :  something went wrong')
//         }
//     },2000)
// })

// promiseFOur
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((er)=>{
//     console.log(er);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejetced");
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({
//                 username:"Rohit",
//                 email: "rohit@gmail.com",
//                 age:20
//             })
//         }
//         else{
//             reject('Error : JS went wrong');
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//     console.log(response);
//     }
//     catch(ERROR){
//         console.log(ERROR);
//     }
// }

// consumePromiseFive()


//using function
// async function getAll(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

//using arrow function
// const getall =async  ()=>{
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getall()


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((er)=>{
    console.log(er);
})
