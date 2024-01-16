// conditionals - if case

const isUserLoggedIn = true
const temp = 41

if(isUserLoggedIn) {
    console.log("User is logged in.")
}

// comparison operators: >,<,<=,>=,!=,==,=== (strict check)

if(2=="2") {
    console.log("Both quantities are equal in value, but datatypes may not be same")
}
console.log(`Is 2 equal to "2"? -> ${2==="2"}`) 


if(temp<50) {
    console.log("Yes, temperature is less than 50")
}

let marks = 45

if(marks>=85 && marks<=100) {
    console.log("A Grade")
} else if(marks>=75 && marks<85) {
    console.log("B Grade")
} else if(marks>=65 && marks<75) {
    console.log("C Grade")
} else if(marks<65 && marks>=50) {
    console.log("D Grade")
} else {
    console.log("Not a valid score!")
}

const balance = 1000
if(balance>500) console.log("Sufficient Balance"); // implicit scope


// way to write multiple lines in if case without {} -> comma separated lines
// not a good practice
if(balance > 800) console.log("Enough Balance"),
console.log("Sufficient balance"),
console.log("Balance greater than 600")
