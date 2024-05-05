// getter and setters using classes (used in many code bases)
class User {
    // (race condition) constructor and set password both are setting the password, this will give error: Maximum call stack size exceeded
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    // if defined one (either getter or setter), it is compulsory to define the other as well
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password() {  // name of the getter or setter is same a s the name of the property
        return `${this._password}aditya`  // password to _password to chage the varibale name to avoid the above error
    }
    set password(value) {
        this._password = value  // password to _password to chage the varibale name to avoid the above error
    }
}
const aditya = new User("aditya@system.com", "abcd");
console.log(aditya.password);
console.log(aditya.email);