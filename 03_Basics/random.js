function first(a, b) {
    // this.a = a
    // this.b = b
    console.log(a, b)
    console.log(`Inside first ${this.a + this.b}`)
}
first(4, 5)

const second = (a, b) => {
    this.a = a
    this.b = b
    console.log(`Inside second ${this.a + this.b}`)
}

second(3, 2)

let a = 2, b = 4
console.log(a, b);