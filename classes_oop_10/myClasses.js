//ES6

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai=new User("ROhit","rohit@gamil.com",21234)
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

//Behind the scene

function user2(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user2.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

user2.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const chai2=new user2("Raman","rohit@gamil.com",7066369211)
console.log(chai2.encryptPassword());

console.log(chai2.changeusername());

