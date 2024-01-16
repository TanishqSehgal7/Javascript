const userEmail = "tanishq@gmail.com"
// empty string (""), null etc are considered falsy values
// Note: empty array is a truthy value
if(userEmail) { // truthy value
    console.log("Got user email.")
} else {
    console.log("Dont have user email")
}

/*

Falsy Values are: false, "", null, 0, -0, BigInt-> (0n), undefined, 
                    nan

Truthy: true, "0", 'false', " ", [empty array], {empty obj},
        anything inside string is truthy, function(){}

*/

const userEmails = []

// check if array is empty
if(userEmail.length === 0) { // truthy value check
    console.log("Array is empty")
}

const emptyObj = {}
// check if object is empty
if(Object.keys(emptyObj).length === 0) { // check if array of keys has length=0
    console.log("Object is empty")
}

console.log(false == 0) // true
console.log(false == "") // true
console.log(0 == '') // true


// Nullish Coalescing Operator (??) -> based on null and undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 
/* check if a value is null and assign a suitable value if 
first value received inside the variable is null */
console.log(val1)

let val2;
val2 = undefined ?? 15
console.log(val2)

let val3;
val3 = null ?? 20 ?? 10 // the very first valid value is assigned
console.log(val3)

//Nullish Coalescing Operator (??) is different from ternanry operator
// condition? true statements: false statements
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")
