/*
Promise object represents the eventual completion of faliure
of an asynchronous operation and its resulting value.
*/

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, Network calls
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed!")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved.")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Third Async task with data")
        resolve({userName:"Tanishq", email:"tsgl7246@gmail.com"})
    },1000)
}).then(function(user){
    console.log(`UserName: ${user.userName}`)
    console.log(`Email: ${user.email}`)
})


const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "Tanishq", password: 123})
        } else {
            reject("ERROR: Something went wrong!")
        }
    },1000)
})

// const username = promiseFour.then((user)=>{ -->> this cannot be done XXX 
//     console.log(user)
//     return user.userName
// })                       
// console.log(username)

// In order to capture data returned from promise, we can do chaining

promiseFour
.then((user)=>{ 
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: Javascript went wrong!")
        }
    },1000)   
});

// another way to consume a promise
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error)
    }
};

// async await doesnot handle directly, so we add the code inside try catch
consumePromiseFive()

async function fetchUserDetails() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}
// fetchUserDetails()

/* fetch() returns a promise which is further consumed up using 
then catch finally or using async await

The global method fetch() starts the process of fetching a resource
from the network return a promise which is fullfilled once the 
response is available

Suppose the promise returned by a fetch() call gives HTTP error
404, then it would be received as a part of response through 
resolve(), not through reject() because an error will only appear in 
case the request was not possible or hindered due to some reason.

Note: A fetch() promise does not reject HTTP errors, instead a
then() handler must check the Response.ok and/or Response.status 
properties.

A micro task queue is made which stores all the call backs for
fetch() only and has higher priority than Task Queue.
It is also called Priority Queue. 

The call backs stored in micro task queue are gives higher 
priority than the task queue and are immediately added 
to the call stack of JS Engine for execution.

*/

fetch('https://randomuser.me/api/')
.then((response)=> {
    return response.json()
})
.then((response)=>{
    console.log(response)
})
.catch((error) => console.log(error))



