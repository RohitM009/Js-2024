// let myName='Rohit'
// let myRole='chai         '

// console.log(myName.Truelength);



let myHeros = ["thor", "spiderman"]

let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
}

Object.prototype.Rohit= function(){
    console.log(`Rohit is EveryWhere`);
}

// heroPower.Rohit();
// myHeros.Rohit();

Array.prototype.raman=function(){
    console.log(`Is rohit available here`);
}
myHeros.Rohit();
myHeros.raman();
// heroPower.raman();

//INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASsupport={
    makeAssignment:'JS assignment',
    fullTIme:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let another="Chai        "

String.prototype.trueLenght=function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

another.trueLenght()
"rohit".trueLenght()
"rohitmaske                 ".trueLenght()
