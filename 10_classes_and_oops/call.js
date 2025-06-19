function setUserName(userName){
    this.userName=userName
}
function createUser(userName,email,password){
    setUserName.call(this,userName)
    this.email=email
    this.password=password
}
const user=new createUser("vansh","vanshgambhirag@gmail.com",123456)
console.log(user)