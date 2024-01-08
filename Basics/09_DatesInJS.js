/* 
Js Date objects represent a single moment in time in a 
platform independent format. Date objects encapsulate 
an integral number that represents miliseconds since
the midnight at the beginning of 1st January 1970, UTC

Temporal api is proposed just like Math library which
is a global Object that acts like top level namespace like
Math.

https://refine.dev/blog/temporal-date-api/

Temporal handles these issues by:

-> First-class support for all time zones
-> Handling objects available with fixed dates and times
-> Providing reliability through parsing a strict string format
-> Support for non-Gregorian calendars
-> Date and time computations by providing simple APIs

Refer Documentation for using Temporal API
*/

// creating a date object
let myDate = new Date()
console.log(myDate) // gives time in TZ format
console.log(`Date to String: ${myDate.toString()}`) //Tue Jan 09 2024 02:27:04 GMT+0530
console.log(`Date to Locale String: ${myDate.toLocaleString()}`) // 9/1/2024, 2:27:04 am
console.log(`Date to toISOString: ${myDate.toISOString()}`) // Mon, 08 Jan 2024 20:57:04 GMT
console.log(`Date to toUTCString: ${myDate.toUTCString()}`) // Mon, 08 Jan 2024 20:57:04 GMT
console.log(`Date to toDateString: ${myDate.toDateString()}`) // Tue Jan 09 2024
console.log(`Date to toLocaleDateString: ${myDate.toLocaleDateString()}`) // 9/1/2024
console.log(`Date to toTimeString: ${myDate.toTimeString()}`) // 02:34:06 GMT+0530 (India Standard Time)

console.log(typeof myDate) // Date is an Object in Js

// declare a specific date in js
// let myCreatedDate = new Date(Year, Month, Day)
let myCreatedDate = new Date(2023, 0, 23) // Months start with 0 in JS
console.log(`My created Date: ${myCreatedDate.toString()}`)

// let myCreatedDate = new Date(Year, Month, Day, Hours, Minutes)
let myCreatedDate2 = new Date(2023, 0, 8, 5, 3) // 8/1/2023, 5:03:00 am
console.log(`MyCreatedDate2: ${myCreatedDate2.toLocaleString()}`)

// Declaring date in specific formats
let myCreatedDate3 = new Date("2023-01-08") // 8/1/2023, 5:30:00 am
// in the above case months start from 1
console.log(`MyCreatedDate3: ${myCreatedDate3.toLocaleString()}`)
console.log(`MyCreatedDate3: ${myCreatedDate3.toLocaleDateString()}`)

// get current time in miliseconds
let currentTimeAndDateInMs = Date.now()
console.log(`currentTimeAndDateInMs: ${currentTimeAndDateInMs}`)
// converting miliseconds into 

// extracting info from date object
let newDate = new Date()
console.log(`newDate: ${newDate}`)
console.log(`newDate Date: ${newDate.getDate()}`)
console.log(`newDate Month: ${newDate.getMonth() + 1}`) // since month start with 0
console.log(`newDate Full Year: ${newDate.getFullYear()}`)
console.log(`newDate Day: ${newDate.getDay()}`)
console.log(`newDate Time: ${newDate.getTime()}`)

// Making a formatted date as per specific parameters in a specific format
console.log(`Formatted New Date is: ${newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'Asia/Kolkata',
    year: "numeric",
    day: "2-digit"
})}`)


// convert miliseconds to datetime
let timeInMs = newDate.getTime()
let convertedDate = new Date(timeInMs)
console.log(`Converted Date from miliseconds: ${convertedDate}`)

// convert miliseconds to datetime in a speific date format
let convertedDate2 = newDate.







