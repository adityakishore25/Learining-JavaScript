function Person(fname, lname) {
    this.fname = fname
    this.lname = lname
}
const member = new Person("Aditya", "Kishore");
Person.prototype.getFullName = function () {
    return`${this.fname} ${this.lname}`
}
console.log(member.getFullName());