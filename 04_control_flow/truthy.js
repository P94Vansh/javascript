const userEmail=[]
if(userEmail){
    console.log("Got User Email")
}
else{
    console.log("Don't have user Email")
}
//falsy
// false,0,-0,+0,BigInt 0n, "", null, undefined, NaN
//truthy
// "0",'false',"",[],{},function(){}
// if(userEmail.length==0){
//     console.log("this array is empty")
// // }
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }
// Nullish coalescing operator(??):null undefined
// let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
// val1=null??10??15
// console.log(val1)

// ternary operator
// condition?true:false;
let iceTea=100
iceTea<=80?console.log("Price is less than Equal to 80"): console.log("Price is greater than 80")