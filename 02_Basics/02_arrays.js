const marvelHero = ["thor", "ironman", "spiderman"]
const dcHero = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros) // takes dcHeros array as element
// array inside array

const allHero = marvelHero.concat(dcHero) 
// concat combines 2 arrays and returns a new array
console.log(allHero) 

const allNewHero = [...marvelHero, ...dcHero]
console.log(allNewHero)

// spread method for arrays
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableAnotherArray = anotherArr.flat(1) // linearly spreads the array elements
/* array.flat(depth) returns a new array with all 
sub-array elements concatenated into it recursively 
upto the specified depth
*/

console.log(`usableAnotherArray: ${usableAnotherArray}`)

console.log(Array.isArray("Tanishq"))
console.log(Array.from("Tanishq")) // converts to array of char
console.log(Array.from({name:"Tanishq"})) 
/* gives empty array, bcz object can't be converted to array
so we need to explicity specify if we need the arrays 
composed of keys or an array composed of values
*/

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
// makes an array of above 3 values