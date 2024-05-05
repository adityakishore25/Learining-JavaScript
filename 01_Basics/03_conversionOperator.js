let ans = "242chf"  // This will get converted to number but it's value is NaN (Not a Number)
// console.log(typeof(ans))


let valueInNumber = Number(ans)
// console.log(typeof valueInNumber)

// console.log(valueInNumber)       //NaN means not a number
// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1; false => 0

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" =>false
// "Aditya" => true
// null => false
// undefined => false

let ans1 = null
let ans1InString = String(ans1)

// console.log(ans1InString)
// console.log(typeof ans1InString)

// ****************** Operations ****************************

let val = 3
let nVal = -val
// console.log(nVal)
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 3)  // 2 to the power 3
// console.log(2 % 3)

let str1 = "Aditya"
let str2 = " Kishore"
let str = str1 + str2
// console.log(str1 + str2)

console.log( ("1" + 2))    // 12 , string
console.log(( (1 + "2")))  // 12, string
console.log( ("1" + 2 + 2))  // 122, string, string comes first so whole answer is in string
console.log( (1 + 2 + "2"))  // 32, string, int is in first, so first claculation part is done then the merging
