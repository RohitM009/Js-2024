class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return `${this._password}rohit`
    }
    set password(value){
        this._password=value
    }

    get email(){
        return `${this._email}@jio.com`
    }
    set email(value1){
        this._email=value1
    }
}

const rohit=new User('ROhit',"123")

console.log(rohit.email)
console.log(rohit.password)
