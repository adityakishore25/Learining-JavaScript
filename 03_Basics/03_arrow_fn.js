const user = {
    username: "M S Dhoni",
    price: 9999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    },
    
}

// user.welcomeMessage();
// user.username = "Kolhi"
// user.welcomeMessage()   // this will consider username "Kolhi"

// console.log(this)   // this is in node environment, this gives en empty object

function chai() {
    let username = "Aditya"
    console.log(this.username)
}
chai()
// const chai = function () {
//     let username = "Aditya"
//     console.log(this.username)
// }

//++++++++++++++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++++++
// const chai =  () => { //Arrow function
//     let username = "Aditya"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explicit return
// }
// const addTwoNumbers = (num1, num2) => num1 + num2  // implicit return 
// const addTwoNumbers = (num1, num2) => (num1 + num2)  // implicit return (oftenly used in react.js)
const addTwoNumbers = (num1, num2) => ({username: "Aditya"})  // to return an object, we have to wrap in to parenthesis
console.log(addTwoNumbers(3, 4))