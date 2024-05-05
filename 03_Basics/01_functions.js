printName() // we can call a function before declearing it as well
function printName() {
    console.log("K")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("O")
    console.log("R")
    console.log("E")
}

printName // reference of the function
// printName() // Executing the function  

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2) {
    // console.log("2nd")
    return (num1 + num2)
}
const res = addTwoNumbers(10, 20);

// console.log("Result :", res)

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} logged in successfully`
}
function loginUserMessage(username = "Kishore") {   //Giving default value, if not given during the function call
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} logged in successfully`
}

console.log(loginUserMessage("Aditya"))
// console.log()
// loginUserMessage("Aditya")

function calculateCartPrice(val1, val2, ...num1) {  // First two values in val1 and val2 ans others in num1 ('...' is called rest operator)
    return num1
}
// By using '...' operator(rest operator), we get an array of the arguments passed during the function call
console.log(calculateCartPrice(200, 400, 500, 212, 3243))


const user = {
    username: "Virat",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
// handleObject({  //Direct passing the object, without making a object seperately
//     username: "Dhoni",
//     price: 399
// })

const newArray = [100, 400, 500, 200, 24442]
function returnSecondElement(getArray) {
    return getArray[1]
}

// console.log(returnSecondElement(newArray))

console.log(`Second value in the array is ${returnSecondElement([100, 2300, 322, 113, 421])}`)