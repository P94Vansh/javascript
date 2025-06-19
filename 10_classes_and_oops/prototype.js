// let myName="vansh   "
// let myScore=100
//our goal is to allow this string to remove the back spaces using a single property
// console.log(myName.trueLength)
let myHero=["luffy","naruto"]
let heroPower={
    "luffy":"haki",
    "naruto":"rasengan",
    getLuffyPower:function(){
        console.log(`the power is ${this.luffy}`)
    }
}
Object.prototype.vansh=function(){
    console.log("vansh is present in all the objects")
}
Array.prototype.sayVansh=function(){
    console.log("Vansh is saying hello")
}
// heroPower.vansh()
// myHero.sayVansh()
// myHero.vansh()
// heroPower.sayVansh()

//inheritance

const user={
    name:"Vansh",
    email:"vanshgambhirag@gmail.com"
}
const teacher={
    makeVides:true
}
const teacherSupport={
    isAvailable:true
}
const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teacherSupport
}
teacher.__proto__=user
// console.log(teacher.__proto__)
//modern syntax
Object.setPrototypeOf(teacherSupport,teacher)
let userName="vansh    "
String.prototype.trueLength=function(){
    console.log(this)
    // console.log(typeof this) -> object
    console.log(`True length is ${this.trim().length}`)
}

userName.trueLength()
"vansh".trueLength()
"chai".trueLength()