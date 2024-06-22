const obj={
    js:"Javascript",
    cpp:'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop

for(const key in obj){
    // console.log(key);
    // console.log(obj[key]);
    // console.log(`${key} shortcut for ${obj[key]}`);
}


const prog=['js','rb','cpp',' py','java']
for (const key in prog){
    // console.log(prog[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map){
    console.log(key);
}

//can't iterate on map 