let random=Math.floor(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.lowOrHi')

const startover=document.querySelector('.resultParas')
const p=document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        valudateGuess(guess);
    })
}

function valudateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a no Greater than 1')
    }
    else if(guess>100){
        alert('Please enter a  number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over.${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`YOu Guessed it right`)
        endGame()
    }
    else if(guess <random){
        displayMessage(`No is too low`)
    }
    else if(guess > random){
        displayMessage(`No is too high`)
    }
}


function displayGuess(guess){
    userInput.value='';
    guessslot.innerHTML +=`${guess},`;
    numGuess++;
    remaining.innerHTML =`${11- numGuess}`;
}

function displayMessage(msg){
    loworHi.innerText=`${msg}`
}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newgame'>Start New Game</h2>`
    startover.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
    const newGamebtn=document.querySelector('#newgame')
    newGamebtn.addEventListener('click',function(e){
        random=Math.floor(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessslot.innerHTML=''
        remaining.innerHTML =`${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame=true
    })
}