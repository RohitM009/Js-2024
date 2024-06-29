class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`This is User ${this.username}`);
    }
} 
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcousre(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new teacher("chai","chai@gmail.com","12345")
chai.addcousre();

const masalachai=new user("masalachai");
masalachai.logme()
