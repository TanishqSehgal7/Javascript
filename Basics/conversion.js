let score = "33abc"
let score2 = null
let score3 = undefined
let score4 = true
let score5 = "Tanishq" 

console.log(typeof score);
console.log(typeof(score));

// converting string to number

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log("Value in number: " + valueInNumber) // NaN (Not a number)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log("Value in number: " + valueInNumber2) // 0

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log("Value in number: " + valueInNumber3) // NaN (Not a number)

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log("Value in number: " + valueInNumber4) // 1

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log("Value in number: " + valueInNumber5) // NaN

// "33" => 33
// "33abc" => NaN (Not a number) but type is Number
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof(isLoggedIn))
console.log(typeof(booleanIsLoggedIn))
console.table([isLoggedIn, booleanIsLoggedIn])

// true => 1; false => 0
// "" => false
// "Tanishq" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof someNumber)
console.log(typeof stringNumber)
console.table([someNumber,stringNumber])