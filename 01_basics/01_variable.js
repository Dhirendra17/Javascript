const accountId = 77717103
let accountEmail = "dhirendrapatil@dev.com"
var accountPassword = "123456"
accountCity = "Pune"
let accountState; // purposely undefined

// accountId = 7 // not allowed

accountEmail = "dp@dev.com"
accountPassword = "00007770"
accountCity = "Mumbai"

console.log(accountId);

/*
Not to use var due to issues in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //accountState with undefined 
 