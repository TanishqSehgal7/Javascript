const programming = ["js", "rb", "py", "java", "cpp"]

// Syntax
// arrayName.forEach(element => {
    
// });

programming.forEach(element => {
    console.log(element)
});

console.log("------------------------------------");

// programming.forEach() -> forEach takes a callback function

programming.forEach( function(item) {
    console.log(item)
})

console.log("------------------------------------");


// The above code can be re-written with an arrow function:

programming.forEach((item) => {
    console.log(item)
})

console.log("------------------------------------");

// We can also pass pre-defined functions as callback functions in forEach

function printMe(item) {
    console.log(item)
}

programming.forEach(printMe) // function reference is to be given here
console.log("------------------------------------");


programming.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )
