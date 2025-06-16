const form=document.querySelector('form')
const result=document.querySelector('#results')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let height=document.querySelector('#height').value
    let weight=document.querySelector('#weight').value
    height=parseInt(height)
    weight=parseInt(weight)
    if(height==='' || isNaN(height) || height<0){
        result.innerHTML="Please Enter a valid height"
    }else if(weight==='' || isNaN(weight) || weight<0){
        result.innerHTML="Please Enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`Your bmi is ${bmi}`
    }
})