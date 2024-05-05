// const user = {
//     username: "Aditya",
//     loginCount: 4,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details")
//         // console.log(`Username: ${this.username}`);
//         // console.log(this)
//     }
// }

// console.log(user.username)
// user.getUserDetails()

function User(username,loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
}

// const userOne = User('Aditya', 7, false)
// const userTwo = User('Kishore', 20, true)
// console.log(userOne)  // prints userTwo, overrides the values of userOne

// using new keyword to avoid this

const userOne = new User('Aditya', 7, false)
const userTwo = new User('Kishore', 20, true)
// console.log(userOne) 
// console.log(userTwo) 
//  Some points about new keyword
// step1. creating a new object
// step2. Constructor function is being called by new keyword
// step4. added to this and get returned

console.log(userOne.constructor)