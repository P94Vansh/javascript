// if
const isUserLoggedIn=true
const temperature=41
if (temperature===40) {
    console.log("Temperature is 40")
} else {
    console.log("temperature is not 40")
}
console.log("Execute")
// <,>,<=,>=,==,===,!=,!==
const score=200
if(score>100){
    let power="fly"
    console.log(`User's power is ${power}`)
}
// console.log(`User's power is ${power}`)
const balance=1000
if(balance<500){
    console.log("balance is less than 500")
}
else if(balance<750){
    console.log("Balance is greater than or equal to 500 but lesser than 750")
}
else if(balance<900){
    console.log("Balance is greater than or equal to 750 but lesser than 900")
}
else{
    console.log("Balance is greater than or equal to 900")
}
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy a course")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in")
}
