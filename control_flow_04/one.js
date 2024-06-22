// //if 
// const userloggedin=true
// const temp=40

// if(temp<50){
//     console.log("less than 50");
// }
// else{
//     console.log("temp greater than 50")
// }
// // <, >, <=, >=, ==, !=, ===, !==

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User Power: ${power}`);
// }

// const balacne=1000
// // if(balacne > 500) console.log("test"),console.log("test2");

// if(balacne >500){
//     console.log("Less Than");
// }
// else if(balacne<750){
//     console.log("Less than 750");
// }
// else if(balacne<900){
//     console.log("Less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userloggedin=false
const debitcard=true
if(userloggedin && debitcard){
    console.log("Allow to buy course");
}

const loggedinfromgoggle=false
const loggedinfromemail=true
if(loggedinfromemail || loggedinfromgoggle){
    console.log("User Logged in");
}
