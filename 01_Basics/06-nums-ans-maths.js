const score = 100
// console.log(score)

const balance = new Number(100.232)  // A object of type number
// console.log(balance)
// console.log(typeof balance)

// console.log(balance.toString())  // converted to string
// console.log(balance)
// console.log(typeof balance)
// console.log(balance.toFixed(4))   // output 100.00 (number of digits after decimal)

const otherNumber = 112.3411
// console.log(otherNumber.toPrecision(3))

const hundred = 1000000000
// console.log(hundred.toLocaleString())    // Apply commas according to US standard
// console.log(hundred.toLocaleString('en-IN'))    // Apply commas according to Indian standard

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
// console.log(Math)   //Library of js,  object
// console.log(Math.abs(-1))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))

// console.log(Math.max(4, 23, 4, 53, 2))
// console.log(Math.min(4, 23, 4, 53, 2))

console.log(Math.random())     //random value betweeen 0 ans 1
console.log(Math.random() * 10 + 1)     //random value betweeen 1 ans 10, 1 is added so that it will not return 0
console.log(Math.floor(Math.random() * 10 + 1))     


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)     // to get random numbers between min and max => (10, 20]



