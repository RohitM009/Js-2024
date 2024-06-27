const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')

//this setInterval is used to continuously run the method which is given 
//it is controlled by js events
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000);