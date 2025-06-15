//singleton
// Object.create()
// object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Vansh",
    "fullName":"Vansh Gambhir",
    [mySym]:"myKey1",
    age:19,
    location:"Haridwar",
    email:"vanshgambhirag@gmail.com",
    isLoggedIn:true,
    lastLoggedInDays:["Sunday","Monday"]
}
// console.log(jsUser.fullName)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(typeof jsUser[mySym])
jsUser.email="vansh@chatgpt.com"
console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email="vansh@microsoft.com"
console.log(jsUser)
jsUser.greeting=function(){
    console.log("Hello, User")
}
jsUser.greetingTwo=function(){
    console.log(`Hello, ${this.name}`)
}
jsUser.greeting()
jsUser.greetingTwo()