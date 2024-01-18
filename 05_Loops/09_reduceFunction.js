/* reduce function -> executes a user supplied reducer callback
function on each array element. The final result of running the
reducer accross all elements of the array is a single value.
*/

const arr = [1,2,3,4,5,6,7,8,9,10]
const intialValue = 0

const sumOfArrayElements = arr.reduce (
    (accumulator, currentValue) => 
    accumulator + currentValue, intialValue);

console.log(sumOfArrayElements)

// initialvalue goes into accumulator for the first execution
// then currentvalue keeps on getting accumulated in accumulator

// most baic usage of reduce when a function is to be given
const sumArr = arr.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue
}, intialValue)
console.log(sumArr)


// using arrow function

const arrSum = arr.reduce( (acc, currVal) => {
    return acc + currVal
}, intialValue)
console.log(arrSum)

// OR 

const arrSum2 = arr.reduce( 
    (acc, currVal) => acc + currVal, intialValue)

console.log(arrSum2)


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "backend web dev course",
        price: 8999
    },
    {
        itemName : "backend web dev course",
        price: 8999
    },
    {
        itemName : "DS Algo - Java",
        price: 4999
    },
    {
        itemName : "Android App Development - Kotlin",
        price: 9999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Total price of courses: ${totalPrice}`)

