const clock=document.querySelector('#clock')
setInterval(()=>{
    const date=new Date();
    const localTime=date.toLocaleTimeString()
    clock.innerHTML=localTime
},1000)