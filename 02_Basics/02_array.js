const color = ['orange', 'pink', 'red', 'yellow']
const fruits = ['apple', 'grapes', 'banana']
// color.push(fruits.join())
color.push(fruits)
// console.log(color)    // array inside an array
// console.log(color.length)
// console.log(color[4][0])

// const items = color.concat(fruits)
// console.log(items)

const all_items = [...color, ...fruits]   // spread operator
// console.log(all_items)
const another_item = [2, 31, 34, 13, 3, 1231, 32, 123, [13, 1, 13, [2, 5, 35, 345, 35, 3, 23, 4, 5, 45, 35, 35, 3, [2, 23, 4, 42, 42, 42]]]]
const real_items = another_item.flat(2)  // 0,1,2
console.log(real_items)

// console.log(Array.isArray([1, 2, 3, 4]))    // true
// console.log(Array.from("Aditya"))    // return an array
// console.log(Array.from({ name: "Aditya" }))       // intresting


let score1 = 100

let score2 = 100

let score3 = 300
// console.log(Array.of(score1, score2, score3, score1))