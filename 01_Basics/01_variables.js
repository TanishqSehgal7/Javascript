const accountId = 144553
let accountEmail = "tsgl7246@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi" // not a good way to declare variables
let accountState;

/*
By default all unassigned variables have the the value
as undefined in js

const -> value cannot be changed and is set as 
constant throughout the program scope

In js, we can declare variables using let and var
var is not used mostly, since it is not scope aware
To solve this, let was introduced, whic is scope {}
aware

Prefer not using var because of issue in block scope
and functional scope
*/

// accountId = 2; // gives error since const can't be changed
console.log(accountId);
accountEmail = "tanishq.sehgal1210@gmail.com"
accountPassword = "212121"
accountCity = "Bangalore"

// for printing muliple variables together, gives output in tabular format
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
