//for 
// for(let i=0;i <10;i++){
//     const ele=i;
//     if(ele ==5){
//         console.log("5 is best no");
//     }
//     console.log(ele);
//}

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

// let myarray=['flsash','batman','superman']
// for(let i=myarray.length;i++){
//     const val=myarray[i];
//     console.log(val);
// }   

// for(let i=0;i<=10;i++){
//     if(i==5){
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${i}`);
// }


for(let i=0;i<=10;i++){
    if(i==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
}