// let myName = "Aditya      "
// let myLastName = "Kishore    "
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.aditya = function () {
    console.log(`Aditya is present in all objects`)
}
// heroPower.getSpiderPower()
// heroPower.aditya()  // function have properties of object

// myHeros.aditya()  // array have the properties of object
Array.prototype.heyAditya = function () {  // declearing a property of array
    console.log('Hello Aditya')
}

// myHeros.heyAditya()
// heroPower.heyAditya()  // Object don't have the access of array properties

// Inheritance


// Old syntax:
const User = {
    name: 'Chai',
    email: 'chai@google.com'
}
const TeachingSupport = {
    makeVideos: true
}
const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport  // inheritance
}

TeachingSupport.__proto__ = User

// Modern syntax:
// Object.setPrototypeOf(TeachingSupport, TASupport)

let anotherUsername = "ChaAurCode         "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);

}


anotherUsername.trueLength()
"Aditya".trueLength()
"Kishore      ".trueLength()