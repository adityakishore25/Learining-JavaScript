// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// map is an object in js, stores unique values and maintains the order
const map = new Map()  
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'India')  // this will not get inserted into the map

// console.log(map)
for (const key of map) {
    console.log(typeof key) // object
}

for (const [key, value] of map) {
    console.log(key, ':', value)
}

const myObject = {
    'Bihar': 'Patna',
    'WB' : 'Kolkata',
    'Karnataka': 'Bangluru'
}

for (const [key, value] of myObject) { // Objects cannot br iterated like this
    console.log(key, ':', value)
}