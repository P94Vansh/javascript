function sayMyName(){
    console.log("V")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
}
// sayMyName()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(2,3)
// function addTwoNumbers(num1,num2){
//     return num1+num2
// }
// console.log(addTwoNumbers(2,3))
function loginUserMessage(userName="Sam"){
    if(!userName){
        console.log("Please enter a valid Username")
        return;
    }
    console.log(`${userName} just logged in!`)
}
// loginUserMessage("Vansh")
loginUserMessage()
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(10,20,30,40,50,60,70))
const user={
    userName:"Vansh",
    price:999
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and the price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    userName:"Vansh",
    price:999
})
function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue([1,2,3,4,5,6]))
let arr=[1,2,3,4,5]
console.log(returnSecondValue(arr))