// after ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abcsef`
//     }
//     changeUsernme() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai', 'kishore@example.com', 251220);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsernme());


// Behind the scene of classes
function User(username, email, password) {
    this.username = username;
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}safdf`
}
User.prototype.changeUsernme= function() {
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@example.com", "!2321")
console.log(tea.encryptPassword())
console.log(tea.changeUsernme())