const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // precision value upto 2 decimals

const num = 23.89766
console.log(num.toPrecision(3)) // 23.9

const num2 = 123.89766
console.log(num2.toPrecision(3)) // 124

const num3 = 23.89766
console.log(num3.toPrecision(4)) // 23.90

const num4 = 1123.89766
console.log(num4.toPrecision(3)) // 1.12e+3

//precision is being counted from before the decimal upto n digits

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // separates 0s as per indian standard
console.log(hundreds.toLocaleString('en-US')) // as per us standards

// Properties associated with Number object
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)
console.log(Number.isFinite())
console.log(Number.isInteger())

// Math Library in JS
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.floor(4.33))
console.log(Math.ceil(1.22345))
console.log(Math.SQRT1_2) // gives sqrt of 0.5 or 1/sqrt(2)
console.log(Math.max(2,6,34,56,73,1))
console.log(Math.min(2,6,34,56,73,1))
console.log(`Random number between 0 and 1: ${(Math.round(Math.random() * 10) + 1)}`); // Math.random() gives a random number between 0 and 1

// Random number between 2 numbers
const min = 10
const max = 20
console.log(`Random number between ${min} and ${max} is: ${Math.floor(Math.random()*(max-min)) + min}`)



