class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}
const vansh=new User("vansh","vanshgambhirag@gmail.com")
console.log(vansh.email)