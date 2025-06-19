class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(this.username)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`${this.username} has added the course`)
    }
}
const vansh=new User("vansh")
const hiteshsir=new Teacher("hitesh","hitesh@google.com","chai")
hiteshsir.logMe()
vansh.logMe()
console.log(hiteshsir instanceof User)
