/* call() is used to hold the reference of a function in 
the call stack
It Calls a method of an object, substituting another 
object for the current object.
usage of call() method is shown below */

function setUserName(username) {
    this.username = username
    console.log("called")
}

function CreateUser(userName, email, password) {
    setUserName.call(this,userName)
    this.email = email
    this.password = password
}

const chai = new CreateUser("Tanishq", "tanishq@gmail.com", "Tan123")
console.log(chai)
