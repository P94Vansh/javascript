const accountId=123412
let accountEmail="vanshgambhirag@gmail.com"
let accountPassword="1234abcd"
accountCity="Delhi"
// {
    //when we directly assign a variable without declaring, it becomes a global property of the window object
    // accountCity="Delhi"
// }
// console.log(accountCity);
accountEmail="gambhirvansh@gmail.com"
accountPassword="abcd1234"
// it is allowed
// accountCity="Mumbai"
// console.log(accountCity);
//not allowed
// accountId=456789
// console.log(accountId);
// We don't prefer to use var because it has a global scope and can be re-declared and updated, which can lead to bugs in the code.
var accName="Vansh Gambhir"
var accName="Vansh Gambhir" // re-declaring a variable with var is allowed
//not allowed
// let accountEmail="gvans"
// console.log(accName);
{
    let accountPassword="avaldkd"
    console.log(accountPassword); // This will log the local variable accountPassword
    
}
// to log multiple variables in one go
console.log({accountId,
    accountEmail,
    accountPassword,
    accName
});
