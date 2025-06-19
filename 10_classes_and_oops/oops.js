const user={
    userName:"Vansh",
    loginCount:10,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got User Details from database");
        // console.log(`UserName:${this.userName}`)
        console.log(this)
    }
}
// console.log(user.userName)
// user.getUserDetails()
// console.log(this)
function User(userName,loginCount,signedIn){
    this.userName=userName
    this.loginCount=loginCount
    this.signedIn=signedIn
    this.greetings=function(){
        console.log(`Welcome ${this.userName}`)
    }
    return this
}
const userOne=new User("Vansh",10,true)
const userTwo=new User("Hitesh Sir",8,false)
// userOne.greetings() this is happening because i have not put new keyword
userOne.greetings()


