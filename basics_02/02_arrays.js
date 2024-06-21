const marval=['thor','ironman','spiderman']
const dcHeros=['superman','batman','flash']


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros=marval.concat(dcHeros);
// console.log(allheros);
//spread operator
// const allNewheros=[...marval,...dcHeros]
// console.log(allNewheros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_arrya=another_array.flat(Infinity)
// console.log(real_arrya);


console.log(Array.isArray("Hitesh"))    //it gives o/p as the given string is array or not
console.log(Array.from("Hitesh"))   //it converts the string into array 
console.log(Array.from({name: "hitesh"})) // interesting gives empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


