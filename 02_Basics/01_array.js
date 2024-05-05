const myArr = [1, 2, 3, "Aditya", false]
// console.log(myArr)
// console.log(myArr[3])
const newArray = new Array(1, 2, 3, 4, "Kishore", true)     // Object of type array
// console.log(newArray)
// console.log(newArray.length)

// myArr.push(10)
// myArr.push(10)
// myArr.pop()
// console.log(myArr)
// console.log(myArr)
myArr.unshift(25)   // 25 insterted in the front, inserting the element at front
myArr.shift()         // first element is removed, removing from the front
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(false))

const thisArray = newArray.join()   // convert the newArray to string
// console.log(thisArray)
// console.log(typeof thisArray)       // output is a string


// +++++++++++++++++++ slice and splice in array ++++++++++++++++++

const obj = [23, 43, 53, 54, 23, 0, 6]
console.log(`Original array is ${obj}`)
const myn1 = obj.slice(2, 4)          // gives a copy of obj from index 2 to (4 - 1) but the original array i.e. obj remains same
console.log(myn1)
console.log(typeof myn1)
console.log(`Array after using slice method ${obj}`)
const myn2 = obj.splice(2, 4)  // at index 2 remove 4 items but the elements of obj of indexex 2 to 4 get deleted
console.log(myn2)
console.log(typeof myn2)
console.log(`Array after using splice method ${obj}`)       // this method changes the array in such a way that merging both the arrays 
                                                            // gives the original array