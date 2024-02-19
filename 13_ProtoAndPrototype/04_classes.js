// ES6 onwards

class User {

    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserNameCase() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Tanishq", "tanishq@gmail.com", "123")
console.log(user1.encryptPassword())
console.log(user1.changeUserNameCase())

// behind the scene working if classes wrapper was not present

function NewUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

NewUser.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

NewUser.prototype.changeUserNameCase = function() {
    return `${this.username.toUpperCase()}`
}

const user2 = new User("Chai", "chai@google.com", "12345")
console.log(user2.encryptPassword())
console.log(user2.changeUserNameCase())


