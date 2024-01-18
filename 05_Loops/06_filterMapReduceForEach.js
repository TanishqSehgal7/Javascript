const programming = ["js", "rb", "py", "java", "cpp"]

// forEach loop does not return a value so the results can't be stored in a variable using foreach in the way given below

const language = programming.forEach( (item) => {
    return item
})
console.log(language) // gives undefined as output


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((item) => item > 4) // implicit return in this case
console.log(newNums)

myNums.filter((item) => {
  return item > 4 // explicit return in this case 
})

// return keyword is necessary if a scope has been started inside the callback function in filter()

// using for each

const newNums2 = []
myNums.forEach((num) => {
    if(num > 4) {
        newNums2.push(num)
    }
})

console.log(newNums2)
