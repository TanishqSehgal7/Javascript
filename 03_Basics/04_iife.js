// IIFE: as the name suggests, these are invoked as soo as the app starts

// declaring an iife
(function myFunc() { // this is a named iife --------------
    console.log("DB CONNECTED");
})(); // semi colon is needed here bcz iife doesn't know where to end the context

// iife syntax
// (function(){})(() for invocation)

/* 
Reasons for using IIFE:
1. global scope pollution:  sometimes there are some global variables
which might cause problems inside the functions declared. To mitigate
this issue, we use iife

2. to immediately execute the functions as soon as the app starts.
*/


// iife as arrow functions
(() => {
    console.log("DB CONNECTED 2"); 
 })(); // semi colon is needed here bcz iife doesn't know where to end the context
 
//  OR

const myFunc3 = (() => "DB CONNECTED 3")();
console.log(myFunc3)


// iife with parameters
const loginMsg = ( // un-named iife
    (userNamne) => `The DB is connected with userName as: ${userNamne}`
)("Tanishq");
console.log(loginMsg);

((userName2) => { // un-named iife
    console.log(`The DB is connected with userName as: ${userName2}`);
})("Tan")

// NOTE: WHENEVER WE HAVE TO WRITE 2 IIFE IN A SINGLE FILE, WE MUST USE SEMICOLON


