const button=document.querySelectorAll(".button")
const body=document.querySelector("body")

button.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function(evt){
        console.log(evt);
        console.log(evt.target)
        if(evt.target.id==='grey'){
            body.style.backgroundColor= evt.target.id;
        }
        if(evt.target.id==='white'){
            body.style.backgroundColor= evt.target.id;
        }
        if(evt.target.id==='blue'){
            body.style.backgroundColor= evt.target.id;
        }
        if(evt.target.id==='yellow'){
            body.style.backgroundColor= evt.target.id;
        }
    })
})