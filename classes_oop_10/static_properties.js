class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username ${this.username}`);
    }
    static createId(){
        return '12344'
    }
}
const hit=new user("rohit")
// console.log(hit.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const rdmi=new Teacher("RedmiNote08","mi@gamil")

rdmi.logMe()
console.log(rdmi.createId())
