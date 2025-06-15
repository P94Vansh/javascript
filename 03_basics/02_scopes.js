let a=10
var b=20
if(true){
    let a=4
    var b=30
    const c=40
    // console.log(b)
}
// console.log(a)
// console.log(b)
// console.log(c)
function one(){
    const userName="vansh"
    function two(){
        const website="youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()
if(true){
    const userName="vansh"
    if(userName==="vansh"){
        const website="youtube"
        console.log(userName+" "+website)
    }
    // console.log(website)
}

// ************interesting stuffs******************
//this is ok
console.log(addOne(4))
function addOne(num){
    return num+1
}
//this is problematic
addTwo(5)
const addTwo=function(num){
    return num+2
}