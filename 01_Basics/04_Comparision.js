// console.log("2" > 1)
// console.log(null > 0)
// console.log(null == 0)
// console.log(null < 0)
// console.log(null <= 0)   // this will give ture 
// console.log(null >= 0)   // this will give true
// The reason is that the equality check == ans comparision >, <, >=, <= work differently.
// Comparison convert null to a number, treating it as 0. That's why 5th ans 6th line give 
// result true and 2, 3 and 4 give false


console.log(undefined == 0) // false with all the operators

// === operator checks the datatype as well, if datatypes and values of the 
// two comparing element is same then only it will give a true value

console.log("2" == 2) //true
console.log("2" === 2) // false