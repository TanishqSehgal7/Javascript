class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`)
    }


    static createUserId() {
        return Math.floor(Math.random()*10) + 1;
    }
}

/*
The static keyword defines a static method or field 
for a class, or a static initialization block. 
Static properties cannot be directly accessed on 
instances of the class. 
Instead, they're accessed on the class itself.
*/


const tanishq = new User("Tanishq")
console.log(tanishq.createUserId())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("First Teacher", "t1@gmail.com")
console.log(teacher)
console.log(teacher.logMe())
console.log(teacher.createUserId())