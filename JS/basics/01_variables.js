const accountId = 144553
let accountEmail = "yashasvia@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
/*
prefer not to use var because of functional and block scope.
*/
let accountState;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);