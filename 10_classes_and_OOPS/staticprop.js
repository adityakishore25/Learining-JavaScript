class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {  // using static, don't allow the child class/es to access the function createId()
        return `123`
    }
}
const aditya = new User("aditya");
console.log(aditya.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@cool.com");
console.log(iphone.createId());  // error, as  createId() is a static function