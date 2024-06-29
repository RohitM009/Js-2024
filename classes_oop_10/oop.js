// const user ={
//     username:"ROhit",
//     age:20,
//     logincount:20,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
// }}
// console.log(user.age);

// //console.log(user.username)
// //console.log(user.getUserDetails());
// // console.log(this);

function user(username,logincount,isLoggedIn){
    this.username=username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Username: ${this.username}` );
    }
    // return this
}
const user1=new user("Rohit",20,true)
const user2=new user("Raman",20,true)
console.log(user1.constructor);
console.log(user2);

//new keyword is used to create an empty object called instance
//