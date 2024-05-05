const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python',
}
// usign 'for in' loop to iterate in objects in js
for (const key in myObject) {
    // console.log(`${key} short name is ${myObject[key]}`)
}

// uisng for in loop to iterate an array
const programming = ['CPP', 'C', 'Java', 'Pyhton', 'JavaScript']
for (const key in programming) {
    // console.log(`Value element is ${programming[key]}`)
}

const map = new Map()  
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key)
}