// this keyword: tells us about the current context


const user = {
    userName: "Tanishq",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website!`)
        console.log(this)
        // this.userName refers to the value of userName as per current context
        // context means the values that the object parameters are currently holding
    }
}

user.welcomeMessage() // till here value in current context is Tanishq
user.userName = "Tan" // here the value of username changes to Tan
user.welcomeMessage() // from now on, value of userName in current context changes


console.log(this) // gives empty object as output because node env is referring to
// the current context (global context) which has no value as of now.

/* whereas, if we print the global context in web browser, it gives us Window
as the output because earlier JS engine was supported along with web browser only
and there was no standalone engine (like node.js, denojs) to execute JS.

So for browsers, the global object is supposed to be Window which lets us 
capture all browser events like mouse-click, form-submit, key-press etc.

*/

// function funOne() {
//     let userName = "Tanishq Sehgal"
//     console.log(this.userName) // this would be undefined, since context works only within objects
// }

// funOne()

console.log("Arrow Functions --------------------")

// Arrow Functions

// normal function declaration
const chai = function() {
    let userName = "Tanishq"
    console.log(this.userName) // gives undefined
    console.log(this) // gives some data related to function
}

chai()

// arrow function declaration, parameters go inside ()
const chai2 = () => {
    let userName = "Tanishq"
    console.log(this.userName) // gives undefined
    console.log(this) // gives empty object
}

chai2()

const addTwo = (n1,n2) => {
    return n1 + n2
} // one way of defining return statement in arrow function (explicit return)

console.log(addTwo(3,5))


// Another way of writing arrow function is by using implicit return

const multiply = (n1, n2) => n1 * n2
console.log(multiply(3,5))

const multiply2 = (n1, n2) => (n1 * n2) // If we use (), return may not be used
console.log(multiply(3,5))

// If we use "{}" inside arrow functions, the we need to use explicit return

const printUserName = () => ({userName:"Tanishq", email:"Tanishq.@gmail.com"}) 
// we can use {} for objects inside arrow functions

// using arrow functions with iteration on array
//const myArr = [2,3,4,5,6]
//myArr.forEach(() => {})

