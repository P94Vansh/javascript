const numToGuess=Math.floor(Math.random()*100+1)
const form=document.querySelector('.form')
const previousGuesses=document.querySelector('.guesses')
const remGuesses=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const wrapper=document.querySelector('#wrapper')
const submit=document.querySelector('#subt')
const textField=document.querySelector('#guessField')
function validate(num){
    if(num=='' || num<1 || num>100 || isNaN(num)){
        return false
    }
    return true
}
function compareGuessToOrig(num){
    if(numToGuess<num) return 'Please Enter lower Number'
    else if(numToGuess>num) return 'Please Enter Higher Number'
    else return "You won!"
}
function endGame(){
    submit.setAttribute('disabled','')
    textField.setAttribute('disabled','')
    startGame()
}
function startGame(){
    const startBtn=document.createElement('button')
    startBtn.className="guessSubmit"
    startBtn.innerHTML="Start the game again"
    startBtn.style.fontSize="smaller"
    wrapper.appendChild(startBtn)
    startBtn.addEventListener('click',()=>{
        remGuesses.innerText=10
        previousGuesses.innerHTML=''
        loworhi.innerHTML=''
        submit.removeAttribute('disabled')
        textField.removeAttribute('disabled')
        textField.value=''
        startBtn.remove()
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const guessValue=parseInt(document.getElementById('guessField').value)
    if(!validate(guessValue)){
        alert(`Please Enter the valid guessValue...`)
    }
    else{
        const result=compareGuessToOrig(guessValue)
        loworhi.innerHTML=result
        if(result==='You won!'){
            endGame()
        }else{
            previousGuesses.innerHTML+=` ${guessValue}`
            const rem=remGuesses.innerText
            remGuesses.innerText=rem-1
            if(remGuesses.innerText==0){
                endGame()
            }
        }
    }
})