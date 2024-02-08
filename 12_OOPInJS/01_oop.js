const user = {
    userName: "Tanishq",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function() {
        console.log("Got user details from dB")
        console.log(`Username: ${this.userName}`)
        console.log(this) // -> gives current context
    }
}

console.log(user.userName)
console.log(user.getUserDetails())

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.gretings = function() {
        console.log(`Welcome! ${this.userName}`)
    }

    // return this -> no need to explicitly write this since by default object instance is returned
}

const user1 = new User("Tanishq", 5, true)
console.log(`User 1 details: ${user1}`);
console.log(user1.gretings());
console.log(user1.constructor);

const user2 = new User("Chai aur Code", 11, false)
console.log(`User 1 details: ${user2}`);
console.log(user2.gretings());
console.log(user2.constructor);

console.log(user1 instanceof User)
console.log(user2 instanceof User)

