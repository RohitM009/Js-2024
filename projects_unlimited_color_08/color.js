//genrate random color

const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() *16)]
    }
    return color
};

let intervalId;

const changeColor=function (){
    if(!intervalId){
        intervalId=setInterval(changebg,1000)
    }
    
    function changebg(){
        document.body.style.backgroundColor=randomcolor();
    }
};

const stopchangecolor= function(){
    clearInterval(intervalId);
    intervalId=null;
};
document.querySelector('#start').addEventListener('click',changeColor);
document.querySelector('#stop').addEventListener('click',stopchangecolor);
