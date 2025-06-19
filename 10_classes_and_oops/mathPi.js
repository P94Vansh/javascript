const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor)
// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)
const obj={
    name:'Vansh',
    status:'Student',
    sayHello:function(){
        console.log("vansh is saying hello")
    }
}

Object.defineProperty(obj,'name',{
    enumerable:false,
    // writable:false
})
for (const [key,value] of Object.entries(obj)) {
    if(typeof value!='function'){
        console.log(`${key}:${value}`)
    }   
}