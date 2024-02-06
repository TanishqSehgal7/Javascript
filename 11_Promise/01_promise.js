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
    })
})

promiseOne.then(function(){
    console.log("Promise Consumed!")
})
