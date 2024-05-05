const accountId = 145523 // value can never be changed
let accountEmail = "Aditykishore21@gmail.com"
var accountPassword = "2324"
accountCity = "Bengaluru"
// accountId = 32322  this is not possible
accountEmail = "kishore@gmail.com"
accountPassword = "12131"
accountCity = "Patna" // If datatype is not decleared then it is of let
let accountState // undefined if the value is not given
/*prefer not to use var, instead use let (because of issue in block scope)*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])