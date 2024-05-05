const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete')
        resolve("for this code")  // calling this function will connect with ".then"
    }, 1000)
})
promiseOne.then(function (str) {
    console.log(`Promise consumed ${str}`)
})

// without holding in a varibale, it can also be done
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {  // using arrow function
    setTimeout(function () {
        resolve({ username: "Aditya", email: "adityakishore2512@gamil.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Aditya", password: "123" })
        } else {
            reject(`ERROR: Something went wrong`)
        }
    }, 1000)
})

// chaining :
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // this must be executed

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Javascript", password: "1234" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive  // The async keyword allows us to use the await keyword within the function.

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("ERROR: ", error)
    }
}

getAllUsers()

// By using try and catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {   // data stores the value returned by the above "then"
        console.log(data)
    })
    .catch((error) => console.log(error))