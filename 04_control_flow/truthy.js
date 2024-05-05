// falsy values
// flase, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'flase', " ", [], {}, function(){} (empty funcion)

// to check an object is empty, convert it to an array

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { // convert it array
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // (output is 10)
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20  // output is 15 (first value)

console.log(val1)

// Terniary Operator

// condition ? true : false
const iceTeaPrice = 200
iceTeaPrice <= 100 ? console.log("less than 100") : console.log("More than 100")