
// let a = 10
// const b = 20
// var c = 30

let a = 300

if(true){ // this is a block scope: used with conditionals, functions etc
    let a = 10
    const b = 20
    var c = 30
    console.log(`INNER: `, a) // gives value as 10
}

//console.log(a) -> gives error
//console.log(b) -> gives error
//console.log(c) -> no error (which is the problem because var is declared inside a specific scope)

/*
var does not work inside the block scope {} because of which const and let was
introduced.
This means when var id declared inside a specific scope, its scope is not at all
limited to that specific scope and var is available for the whole file 
irrespective of where it is declared

Code written inside {} is limited to block scope, everything outside the {}
comes under global scope

 */

console.log(a) // gives value as 300

function one() {
    const userName = "Tanishq"

    function two() {
        const website = "Youtube"
        console.log(userName)
    }
    // console.log(website) -> gives error since website is accessed out of scope
    two()
}

one()

if(true) {
    const userName = "Tanishq"
    if(userName == "Tanishq") {
        const website = " YouTube"
        console.log(userName + website)
    }
    console.log(userName)
    // console.log(website) gives error 
}

// console.log(userName) gives error

console.log(addOne(5)) // function can also be called before declaration
// javascript won't give an error because of hoisting

function addOne(num) {
    return num + 1 
}

// console.log(addOne(5))

addTwo(5) // this gives an error
const addTwo = function(num) { // also called expression
    return num + 2
}

console.log(addTwo(5))
