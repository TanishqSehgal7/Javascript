// functions in js

// function declaration
function sayMyName() {
    console.log("Tanishq Sehgal")
}
sayMyName()


// function add(a,b) {
//     console.log(a+b)
// }
// add(3,4)

function add(a,b) {
    return (a + b)
}

const res = add(3,4) // 7
console.log(res)
// add(3,"4") // 34
// add("3",4) // 34

function loginUserMsg(userName) {
    // if(userName==undefined || userName=="" || userName == null) { OR
    if(!userName) { // Empty strings, undefined, and others are falsy; everything else is truthy.
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in.`
}

// giving default values to function parameters

function loginOnUserMsg(userName = "Tanishq") {
    return `${userName} just logged on.`
}

console.log(loginUserMsg("Tanishq"))
console.log(loginUserMsg(""))
console.log(loginOnUserMsg())


/* for passing multiple values in function as parameters, we use 
rest operator, this is also called spread operator when used for
combining multiple arrays and objects 
*/

function calculateCartPrice(...num1) { // rest operator
    // num1 becomes an array -> same concept as var args 
    return num1
}

function calculateCartPrice2(val1, val2, ...num1) { // rest operator
    // num1 becomes an array
    /* first 2 arguments in function call would be contained in 
        val1 and val2 respectively and subsequent values would be 
        contained inside num1 array
    */
    return num1
}

console.log(calculateCartPrice(200,300,400,500,600))
console.log(calculateCartPrice2(200,300,400,500,600))

// passing objects in functions and using them
const user = {
    userName: "Tanishq Sehgal",
    email: "tanishq@gmail.com",
    age: "24"
}


function handleObject(anyObject) {
    console.log(`Username is: ${anyObject.userName}`)
    console.log(`Email is: ${anyObject.email}`)
    console.log(`Age is: ${anyObject.age}`)
}
handleObject(user)

/* If any changes are made to the object user then it would 
cause errors in above invocation. So we can directly put the
object inside function invocation as follows
*/

handleObject({userName: "Tanishq Sehgal",
email: "tanishq@gmail.com",
age: "24"
})

// pass arrays in function as parameters

const myNewArr = [10,20,30,40,50]

function returnSecondValueFromArr(arr) {
    return arr[1];
}

console.log(`Second Value of Array: ${returnSecondValueFromArr(myNewArr)}`)