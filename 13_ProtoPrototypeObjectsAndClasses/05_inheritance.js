class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // refers to the super class
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by: ${this.username}`)
    }
}

const teacher1 = new Teacher("Tan", "tan@gmail.com", "12345")
console.log(teacher1)
console.log(teacher1.addCourse())

const teacher2 = new User("Tan2", "tan2@gmail.com", "123456")
console.log(teacher2)
console.log(teacher2.logMe())

console.log(teacher1 === teacher2)
console.log(teacher1 instanceof User)
console.log(teacher1 instanceof Teacher)
console.log(teacher2 instanceof User)
console.log(teacher2 instanceof Teacher)

