const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
const hex='0123456789ABCDEF'
let intervalId;
start.addEventListener('click',(e)=>{
    if(!intervalId){
    intervalId=setInterval(()=>{
        let generatedColor='#'
        for(let i=0;i<6;i++){
            const randomNum=Math.floor(Math.random()*16)
            generatedColor+=hex[randomNum]
        }
        document.body.style.backgroundColor=generatedColor
    },1000)
}   
})
stop.addEventListener('click',(e)=>{
    clearInterval(intervalId)
    intervalId=null
})