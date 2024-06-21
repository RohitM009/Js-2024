// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1);
console.log("02">1);


console.log(null > 0);  //=>false
console.log(null == 0); //=>false
console.log(null >= 0); //=>true

//reason behind this is an equality check == and comparison > < >= <= work differntly
//comparison convert null to a number, treating it as 0. 
//That's why (3) null>=0 is true and (1) null>0 is false

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

//=== stict check
console.log("2" === 2);