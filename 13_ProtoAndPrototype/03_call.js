/* call() is used to hold the reference of a function in 
the call stack
usage of call() method is shown below */

function setUserName(username) {
    this.username = username
    console.log("called")
}

function createUser(userName, email, password) {
    setUserName.call(this,userName)
    this.email = email
    this.password = password
}

const chai = new createUser("Tanishq", "tanishq@gmail.com", "Tan123")
console.log(chai)
