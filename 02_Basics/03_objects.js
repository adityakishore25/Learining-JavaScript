// Singleton
// Object.create

const mySym = Symbol("key1")   // declearing a const of datatype Symbol

// Object literals
const JsUser = {   //Declearing
    "full name": "aditya Kishore",
    [mySym]: "mykey1",         // refering mySym decleared above
    name: "aditya",
    name: "Kishore",  // this will update the vlaue of the name to "Kishore"
    age: 21,
    email: "kishore25@gmail.com",
    location: "bangalore",
    isLoggedIn: false,
    lastLggedinDays: ["Mon", "tue"]
}

console.log(JsUser["name"])
//  two ways to access the data
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])     //printing the symbol decleared above in using object

// update
JsUser.age = 23

// freeze
// Object.freeze(JsUser)
JsUser.location = "Patna"  // this change can't reflect in the original object as JsUser.location has been freezed
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JS user")
}
JsUser.greetingOne = function () {
    // Three ways to access the properties of object inside a function/method
    console.log(`Hello JS user, ${JsUser["name"]}`)
    console.log(`Your age is: ${this.age}`)
    console.log(`Your location is: ${this["location"]}`)
}

JsUser.greetingOne()
// JsUser.greeting()
// console.log(JsUser.greeting())
// console.log(JsUser.greetingOne())
// console.log(JsUser.greeting) 