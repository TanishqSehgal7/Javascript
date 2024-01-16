// for loop
const array = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element == 5) {
        console.log("Mid Value")
    }
    console.log(element)    
}


for (let i = 0; i < 5; i++) {
    console.log(`Outer Loop Value: ${i}`)   
    for (let j = 0; j < 5; j++) {
        console.log(`Inner Loop Value: ${j}`)   
    }
    console.log("-------------------------------")
}

let myArr = ["flash", "batman", "superman"]

for (let hero = 0; hero < myArr.length; hero++) {
    console.log(myArr[hero])
}

//  break and continue
for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5")
        break; // stops the loop and exits control flow
    }
    console.log(`Value of index is: ${index}`)    
}

for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5")
        continue; 
        // skips current iteration and proceeds to next one
    }
    console.log(`Value of index is: ${index}`)    
}



