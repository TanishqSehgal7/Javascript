/* singleton - : when object is declared as a literal, 
singleton is not formed but if an objec is delcared 
as a constructor, the a singleton is formed.
*/

const mSym = Symbol("key1")

// object literals

const jsUser = {
    name: "Tanishq",
    "full name" : "Tanishq Sehgal", // cannot be accessed using object.property method
    [mSym] : "myKey1", // the only way to add a symbol in an object
    age: 24,
    email: "tsgl7246@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday,", "Wednesday", "Saturday"]
}

/*
Object contains key:value pairs as it contents
and the key is processed as a string while value maybe
of any allowed datatype
*/

// accessing the objects
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"]) // full name can only be accessed like this
console.log(jsUser[mSym]) // value not to be given as string

// changing object values
jsUser.email = "tanishq.sehgal@gmail.com"
console.log(jsUser)
Object.freeze(jsUser) // now value of email cannot be changed 

/* After freezing the object, the values cannot be changed
even if we try to changes the values, changes will not be
propagated to the object reference 
*/

jsUser.email = "tsgl7246@gmail.com"
console.log(jsUser)

// another way to create object
// Object.create() -> constructor declaration of object (singleton)

// we can also add functions inside objects

const jsUser2 = {
    name: "Tanishq",
    "full name" : "Tanishq Sehgal", // cannot be accessed using object.property method
    [mSym] : "myKey1", // the only way to add a symbol in an object
    age: 24,
    email: "tsgl7246@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday,", "Wednesday", "Saturday"]
}

jsUser2.greetings = function() {
    console.log("Hello!!")
    console.log(jsUser2)
}

console.log(jsUser2.greetings())
console.log(jsUser2.greetings) //[Function (anonymous)] -> function reference

// functions in objects with arguements
jsUser2.greetingsTwo = function() {
    console.log(`Hello Js User: ${this.name}`)
    // to reference to the same object, we can use this keyword
    // this.name referes to the field name of jsUser2 object

}

console.log(jsUser2.greetingsTwo())