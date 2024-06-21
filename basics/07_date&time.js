// let date=new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

let myCreatedDate = new Date(2023, 0, 23)
// let newDate=new Date(2023, 5,12,5,3)
// console.log(newDate.toDateString());
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp=Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(`${newDate.getDay()} and the time `);



newDate.toLocaleString('default', {
    weekday: "long",
})