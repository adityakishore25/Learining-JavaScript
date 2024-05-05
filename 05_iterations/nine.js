// reduce in js

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let cnt = 0
// const total = myNumbers.reduce(function (acc, currval) {  // using normal function
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)  /* initially accumulator takes this 0 value and in each iteration, the value of current index is added to accumulator
//                                             and get stored in 'total' by using return   */


const total = myNumbers.reduce((acc, currval) => {   // using arrow function
    // console.log(`acc : ${acc} and currval ${currval}`)
    return acc + currval
}, 0)          

// console.log(total)
const shopingCart = [
    {
        itemName: 'JS course',
        price: 499
    },
    {
        itemName: 'Python',
        price: 1499
    },
    {
        itemName: 'Mobile',
        price: 699
    },
    {
        itemName: 'Data Scientist',
        price: 1199
    },
]

const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)