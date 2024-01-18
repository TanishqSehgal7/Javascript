const arr = [1,2,3,4,5]

// iterator is a value for traversal, just like in for loop
// object refers to the entity on which we need to traverse
/* Syntax 
for (const iterator of object) {
    
}
*/

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings) { // converts string into characters
    if(greet != " ") {
        console.log(`Each char is: ${greet}`)        
    } else {
        continue;
    }
}

