// const promiseOne=new Promise(function(resolve,reject){
//     //an async task like db calls , cryptography,network
//     setTimeout(()=>{
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise is resolved")
// })
// new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Task two is completed")
//             resolve()
//         },1000)
// }).then(function(){
//     console.log("second async task is completed")
// })
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({name:"vansh",email:"vanshgambhirag@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(data){
//     console.log(data)
// })
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({name:"vansh",email:"vanshgambhirag@gmail.com"})
//         }
//         else{
//             reject('Error Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((data)=>{
//     return data.name
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("This promise is successfully resolved or rejected")
// })
// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({name:"vansh",email:"vanshgambhirag@gmail.com"})
//         }
//         else{
//             reject('Error Something went wrong')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// consumePromiseFive()
// async function callApi(){
//     try{
//         const data=await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(data.type)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// callApi()
fetch('https://api.github.com/users/hiteshchoudhary').then((data)=>{
    console.log(data.type)
}).catch((e)=>{
    console.log(e)
})  
// promise.all
// it takes all the promises as an array and returns a new single promise if either of them rejects, this promise rejects as well with the first rejection reason