const accountId = 45588
let accountEmail = "sipankar@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubneswar"
let accountSate

// accountId = 3 // not allowed

accountEmail = "hghgggvgmail.com"
accountPassword = "125422"
accountCity = "cuttack"

console.log(accountId);
/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountSate])
