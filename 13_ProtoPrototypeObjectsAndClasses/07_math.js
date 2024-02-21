const myNewObj = {
    username: "Tanishq"
}

const pi = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(pi)
/*
the output of the above code is as follows:

{  
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

Here writable is false, which means that this value cannot be 
changed and re-written, because of which the below code does not work
and gives the same value of Math.PI which is 3.141592653589793 everytime.

Math,PI = 5
console.log(Math.PI)
 */

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Code Fat gaya!")
    }
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
console.log(Object.getOwnPropertyDescriptor(chai, "price"))
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"))

//  To change the properties of the above created object, we can define object
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
console.log(Object.getOwnPropertyDescriptor(chai, "price"))
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"))

// we can make specific properties of an object non iterable by making enumerable as false

for (let [key, value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`Key: ${key} ; Value: ${value}`)
    }
}