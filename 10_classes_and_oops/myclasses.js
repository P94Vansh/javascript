//ES6
// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//        return this.username=this.username.toUpperCase()
//     }
// }
// const vansh=new User("vansh","vanshgambhirag@gmail.com","1234")
// console.log(vansh.encryptPassword())
// console.log(vansh.changeUserName())
// console.log(vansh.username)

//behind the scene
function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUserName=function(){
    return this.username=this.username.toUpperCase()
}
const vansh=new User("vansh","vanshgambhirag@gmail.com","1234")
console.log(vansh.username)
console.log(vansh.changeUserName())
console.log(vansh.encryptPassword())