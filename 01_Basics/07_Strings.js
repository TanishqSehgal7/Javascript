const name = "Tanishq"
const repoCount = 30

// console.log(name + repoCount + " Value")

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


 const gameName = new String('GTA-ViceCity')
 // gameName is a string object
 console.log(typeof gameName)

 console.log(gameName[0]) // access characters from object array
 console.log(gameName.__proto__) // shows the object
 console.log(gameName.length) // length of string object
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('t'))
 
 const newString = gameName.substring(0,4) // end index is excluded
 console.log(newString)

 const newString2 = gameName.slice(0,4) // end index is excluded
 console.log(newString2)

 const newString3 = gameName.slice(-8,4)
 console.log(newString3)

//  slice accepts negative values but substring does not
// substring takes starting index as 0 if a negative index is given
const str = "   Tani  shq    "
const cleanStr = str.trim() // removes starting and ending spaces
const cleanStart = str.trimStart()
const cleanEnd = str.trimEnd()
console.log(str)
console.log(cleanStr)
console.log(cleanStart)
console.log(cleanEnd)

/* trim(), trimStart() and trimEnd() only works on
white spaces including line terminators (/n)
*/

const url = "https:tanishqsehgal.com/tanishq%20sehgal"
// browser doesnt understand spaces and converts them into %20
// so to remove it, we can use
console.log(url.replace('%20','-'))
console.log(url.includes('tan'))
console.log(url.includes('max'))

//  convert string to array based on a character
console.log(gameName.split('-'))