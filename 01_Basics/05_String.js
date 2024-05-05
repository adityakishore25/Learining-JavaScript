// String concatination

const name = "Aditya"
const count = 25
// console.log(name + count + "Kishore")
console.log(`Hello my name is ${name.toUpperCase()} and my count is ${count}`); // Use of Backticks (Sting Interpolation)
// console.log(typeof name)

const gameName = new String('Turkish')   //Another way of declearing string

// console.log(typeof gameName)   //Object
// console.log(gameName[0])

// console.log(gameName.__proto__)        //Object
// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))

console.log(name.indexOf('a'))      //If the charecter is present at more than one index, then it will return the last index
// console.log(gameName.indexOf('d'))  // output is -1 as 'd' is not present
// console.log(gameName.indexOf('s'))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherName = gameName.slice(-10, 7)
// console.log(anotherName)   // output - Turk

const newStringfirst = "     Aditya         "
// console.log(newStringfirst)
// console.log(newStringfirst.trim())    //removes extra spaces from front and end as well

const url = "https://aditya.com/aditya%20kishore"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('kishore'))
let ok = url.includes('kishore')
// console.log(ok)


const fullName = "Mahendra Singh Dhoni"
// console.log(fullName.split(' ', 3))  // split return an array