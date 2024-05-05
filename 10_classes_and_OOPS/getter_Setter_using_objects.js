// object is less commonly used
// The underscore prefix (_) is a convention in JavaScript to indicate that a property is considered private.
const User = {
    _email: 'ak@kishore.com', 
    _password: "abcde",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)  // insted of using new keyword syntax
console.log(tea.email);