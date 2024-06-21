const name = "rohit"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring=gameName.substring(0,4)
console.log(newstring);

const anotherstring=gameName.slice(-8,4)
console.log(anotherstring);

const newstiring1="    rohit        "
console.log(newstiring1);
console.log(newstiring1.trim());

const url="https://rohit.com/rohit%20com"
console.log(url.replace('%20','-'))

console.log(url.includes("rohit"));

console.log(gameName.split('-'));