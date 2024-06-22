// for of loop

const arr=[1,2,3,4,5,5]

for (const i of arr){
    // console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// Maps

const map=new Map()
map.set('In',"INDIA")
map.set('USA',"United States Of America")
map.set("Fra","Frnace")

// console.log(map)

for(const [key,value] of map){
    // console.log(key, ":-",value);
}

const myobj={
    "game1":"GTA",
    "gmae2":"vallo"
};
//on object it is not working

for(const [key,value]of myobj){
    // console.log(key,'-',value);
}

