// declare an array
const myArr = [0,1,2,3,4,5]

/* -> JS arrays are re-sizable and can contain different 
data types

-> Js arrays are not associative arrays (elements can't 
be accessed using arbitrary strings as indexes) but must
be accessed using non-negative integers 

-> JS arrays are zero indexed

-> JS array copy operations create shallow copies
(Shallow copy of an object is a copy whose properties
share the same reference point. When you change the
source or the copy, the other object is also changes
accordingly)

(Deep Copies of an object is a copy whose properties 
do not share the same refrences as those of the source
object from which the copy was made. As a result, when
we change the source, or the copy, the other object
has no effect and remains as it is. 
*/

// ways to declare an array
const myHeros = ["batman", "superman", "spiderman"]
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[0])
console.log(myHeros[1])
console.log(myArr2[2])


// array methods
myArr.push(6)
console.log(`MyArr is: ${myArr}`)
myArr.push(7)
console.log(`MyArr is: ${myArr}`)
myArr.pop() // removes the last value in the array
console.log(`MyArr is: ${myArr}`)

myArr.unshift(9) 
// shift all elements by 1 index and inserts number at the start
console.log(`MyArr is: ${myArr}`)

myArr.shift(9) // removes the starting value from array
console.log(`MyArr is: ${myArr}`)

myArr.shift(0) 
console.log(`MyArr is: ${myArr}`)

console.log(myArr.includes(5))
console.log(`Index of 3 in ${myArr} is: ${myArr.indexOf(3)}`)

console.log(`Index of 9 in ${myArr} is: ${myArr.indexOf(9)}`) 
// gives -1 since 9 is not present in array

const newArray = myArr.join() 
// joins myArr into newArray and converts into string

console.log(myArr)
console.log(newArray)

// slice and splice
console.log("A ", myArr)

const myn1 = myArr.slice(1,3) // end index is not included in slice
console.log(`myn1 is: ${myn1}`)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) 
// end index is included in splice
/* splice also extracts the array elements within 
specified range and removes them from original array 

while in slice, the ending index is not included and
the original array remains intact.
*/
console.log(`myn2 is: ${myn2}`)
console.log("C ", myArr)




