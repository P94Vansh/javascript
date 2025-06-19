class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(this.userName)
    }
    static createId(){
        return '123'
    }
}
const vansh=new User("vansh")
// console.log(vansh.createId()) 
class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email=email
    }
}
const hiteshsir=new Teacher("hitesh","hitesh@chai.com")
hiteshsir.createId()