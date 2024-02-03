//setTimeout(): it is a function that is there in the Window API Object
// accepts a handler function, timeout, 
const changeText1 = setTimeout(function(){
    // console.log("Tanishq Sehgal")
    document.querySelector("h1").innerHTML = "TANISHQ"
}, 2000);

/*
setInterval(): keeps repeating a specific task for a 
specific time interval

setTimeout(): does a specific task after a specific 
interval of time.
 */

/*
setTimeout() can also be written in the following way
*/

const changeText2 = setTimeout(()=>{
    // console.log("Tanishq Sehgal")
    document.querySelector("h1").innerHTML = "TANISHQ SEHGAL"
},4000)


/* stopping the setTimeout() execution using clearTimeout() */

document.querySelector("#stop").addEventListener('click', function(e) {
    console.log("Stop Button Clicked and setTimeout cleared.")
    clearTimeout(changeText2)
});

document.querySelector("#start").addEventListener('click', function(e){
    console.log("Start Button Clicked...")
    let count = 0
    const helloCount = setInterval(function(str){
        document.querySelector("h1").innerHTML = `${str} TANISHQ SEHGAL ${count++}`
    },1000,"Hi!");
    // hello count keeps printing repeatedly after 5 seconds

    // stopping setInterval() execution using clearInterval()
    document.querySelector("#stop").addEventListener('click', function(e) {
        clearInterval(helloCount)
        document.querySelector("h1").innerHTML = "Hello Count Stopped"
    });
});
