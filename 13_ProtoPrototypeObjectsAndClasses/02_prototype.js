let myName = "Tanishq    "

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.tanishq = function() {
    console.log(`tanishq is present in all objects`)
}

Object.tanishq()
myHeros.tanishq()

Array.prototype.tanishq2 = function() {
    console.log(`tanishq2 is present in all objects`)
}

myHeros.tanishq2()

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
    // assigning properties of one object to another through proto
}

// Out-dated approach
Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "  Tanishq Sehgal    "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"tanishq  ".trueLength()
"iceTea".trueLength()
