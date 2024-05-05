class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)  // same a logMe.call(this, username)
        this.email = email
        this.password = password
    }
}
const newTeacher = new Teacher("Kishore_25", "kishore@cool.com", "123112");
console.log(newTeacher);
newTeacher.logMe()