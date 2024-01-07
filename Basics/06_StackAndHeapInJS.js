/* 
We have stack memory and heap memory
Primitive Datatypes use Stack memory 
-> a copy of variable is alllocated for usage when 
stack memory is being used

Non-Primitive Datatypes use Heap memory
-> the actual reference of the variable is allocated for
usage when heap memory is being used.

*/

let name = "Tanishq Sehgal" // goes into stack
let anotherName = name
anotherName = "Tanishq"
console.log(name)
console.log(anotherName)

let userOne = { 
// object goes into heap, userOne variable goes into stack
// userOne would access the reference of object from heap
    email: "tsgl7246@gmail.com",
    upiid: "9876543222@upi"
}

let userTwo = userOne
console.log(userOne)
console.log(userTwo) 
// userTwo would also get the reference of object in heap

/* this changed the value of email inside the heap through
the reference of the object allocated to userOne and userTwo.
Hence email for both the objects is updated since both userOne
and userTwo have the reference to the same object.
*/
userTwo.email = "tanishq.sehgal1210@gmail.com"
console.log(userOne)
console.log(userTwo)