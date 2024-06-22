//for each

const coding=['js','ruby','cpp','java','py']

// coding.forEach( function (vaal){
//     console.log(vaal);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const mycoding=[
    {
        languageName:'javascript',
        langfilenae: 'js',
    },
    {
        languageName:'python',
        langfilenae: 'py',
    },
    {
        languageName:'cpp',
        langfilenae: 'c++',
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName);
})
