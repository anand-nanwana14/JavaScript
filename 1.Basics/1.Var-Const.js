const Account_Name = "Anand" 
let Account_ID = "1234"
var Account_Pass = "123asd"
let Account_City = "Indore"

/*
prefer not to use var because of issue in block scope and functional scope 
*/

console.log(Account_Name)

 Account_City = "Kota"
 Account_ID = "4455"
console.table([Account_ID, Account_Name, Account_Pass, Account_City])

