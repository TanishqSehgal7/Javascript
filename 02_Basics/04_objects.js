// declaring objects as constructor
const jsUser3 = new Object() // constructor declaration -> singleton
console.log(jsUser3)

// const jsUser4 = {} -> declaration of object as as literal

jsUser3.id = "123abc"
jsUser3.name = "Tanishq"
jsUser3.isLoggedIn = false

console.log(jsUser3)

const regularUser =  {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Tanishq",
            lastName: "Sehgal"
        }
    }
}

// accessing the properties of nested objects
console.log(regularUser.email)
console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.firstName)
console.log(regularUser.fullName.userFullName.lastName)

// optional chaining -> used to apply a protection check for non existing values as follows
// console.log(regularUser.fullName?.userFullName.firstName)

// combining objects 
const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2} // this is not how we combine objects
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign(target, source)
const obj4 = Object.assign(obj1, obj2)
/*
Object.assign() -> copies the values of all of the 
enumerable properties from one or more source objects to
a target object. Returns the target object. 
*/
console.log(obj4)

/*  OR the below method is used when multiple objects are to be combined
first parameter {} (empty object) -> becomes the target
and the objects following {} are treated as the source
*/

const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5)

// OR
const obj7 = {...obj1,...obj2} // best way to combine objects


// getting values from database as array objects into objects

const users = [
    {
       id:1,
       email: "tan1@gmail.com" 
    },
    {
        id:2,
        email: "tan2@gmail.com" 
     },
     {
        id:3,
        email: "tan3@gmail.com" 
     },
     {
        id:4,
        email: "tan4@gmail.com" 
     }
]

// individually accessing the objects from array
users[0].id
users[0].email
users[0].id
users[1].email

console.log(Object.keys(jsUser3)) // gives an array of keys from specified object
console.log(Object.values(jsUser3)) // gives an array of values from specified object
// console.log(jsUser3.length) // length of object  
console.log(Object.entries(jsUser3)) 
/* Object.entries(jsUser3) every key:value pair goes into an array whose 
first value would be the key and second value would be the value 
against the key
*/

// check if a particular value exists in an object
console.log(jsUser3.hasOwnProperty('isLoggedIn'))
console.log(jsUser3.hasOwnProperty('isLoggedOff'))