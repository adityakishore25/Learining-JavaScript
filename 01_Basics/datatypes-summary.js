// Primitive (7 types) :
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // By using cosnt keyword, we can't change the value of the variable
const scoreValue = 100.943

const isLoggedIn = false
const outsideTemp = 23
let userEmail = undefined
let user_email
let vlaue = 154664646548613214566n // if 'n' is written in the last then the number is converted to bigInt
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)  // this will give answer false even though there values a same
// lines 9 and 10 are same, in both the cases value of the vriable is undefined

// Reference (Non primitive)

// Array, Objects, Functions

// https://262.ecma-international.org/5.1/#sec-11.4.3  get more about the typeof operator

const color = ["Orange", "black", "White"];


// objects :
let myObj = {
    name: "Aditya",
    age: 21,
}

// Function:
const myFunction = function () {
    console.log("Hello World")
}

// console.log(typeof vlaue)   // output is BigInt

// ++++++++++++++++++++++++++++++++++

// Types of memory in javascript

// Stack (primitive datatypes)    (passed by value i.e. a copy of the varible is passed and thus no change in actual value)
// Heap (Non-Primitive)   (passed by reference i.e. change the actual value of the datatype)

// Example of stack
let name = "Aditya"
let anotherName = name
anotherName = "Kishore"
console.log(name) // name is Aditya only

// Example of Heap
let userOne = {
    email: "kishore@gmail",
    upi :"2431@sbi"
}

let userTwo = userOne
userTwo.email = "aditya@gmail"
console.log(userOne.email)  // Output is aditya@gmail as userOne is passed by reference (heap memory)