const boxes=document.querySelectorAll('.button')
const body=document.querySelector('body')
boxes.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        body.style.backgroundColor=e.target.id
    })
})