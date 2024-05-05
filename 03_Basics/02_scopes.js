// var b = 50

if (true) {
    let a = 10
    var b = 32        // var doesn't old true in the scope concept, it can be accessed anywhere in the program
    const c = 23
}

// console.log(a)
// console.log(c)
console.log(b)

one()
function one() {
    const username = "Surya"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)  // can't be accessed outside the function one
    two()
}

// one()

if (true) {
    const username = "Rohit"
    if (username == "Rohit") {
        const website = " youtube"
        // console.log(username, website)
    }
    // console.log(website)  //gives error
}
// console.log(username)   // gives error


addOne(5)  // calling the function before declearing will work in js

function addOne(num) {
    return num + 1
}


// addTwo(5)       // calling a function before declearing, this will give error 
const addTwo = function(num) {       // also called function expressions
    return num + 2
}