const arr = [1,2,3,4,5]

// iterator is a value for traversal, just like in for loop
// object refers to the entity on which we need to traverse
/* Syntax 
for (const iterator of object) {
    
}
*/

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings) { // converts string into characters
    if(greet != " ") {
        console.log(`Each char is: ${greet}`)        
    } else {
        continue;
    }
}

// Maps in JS -> set of key-value pairs, contains no duplicate values and order is also maintained
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("CAN", "Canada")
map.set("AUS", "Australia")
map.set("GER", "Germany")
map.set("FR", "France")
map.set("EN", "England")

console.log(map)

console.log("------------------------------------")


for (const [code,country] of map) { // destructuring of key-value pair array
    if(map) {
        console.log(`Country Code for ${country} is ${code}`)
    }
}

const myObj = {
    js: "Javascript",
    cpp: "C PlusPlus",
    rb: "Ruby",
    kt: "Kotlin",
    swift: "Swift by apple"
}

console.log("------------------------------------")
// for (const [count,game] of myObj) {
//     if(myObj) {
//         console.log(`${count} -> ${game}`)
//     }
// } This does not work with objects

// Forin loop is used to iterate over objects

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObj) {
    // console.log(key) // gives all keys of object
    // console.log(myObj[key]) // gives value corresponding to key
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

console.log("------------------------------------")


const programming = ["js", "rb", "py", "java", "cpp"]

for (const lang in programming) {
    // console.log(lang) // gives only the keys of array (indexes)
    console.log(programming[lang]) // this gives the values of array
}

console.log("------------------------------------")


// forin loop on maps -> does not work since maps are not iteratable
// for (const [key,value] in map) {
//     console.log(`${key} -> ${value}`)
// } -> this will not work