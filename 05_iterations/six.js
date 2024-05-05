const coding = ['CPP', 'C', 'Java', 'Pyhton', 'JavaScript']

const val = coding.forEach((item) => {
    // console.log(item)
    return item  // for each doesn't return any value
})
// console.log(val)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)  // filter returns a value (implicit return)

const someNums = myNums.filter((num) => {
    // num > 4  // wrong
    return num > 4  // returning inside a scope (explicit return)
})
// console.log(newNums)
// console.log(someNums)

// By using forEach (condition)

const firstNums = []
myNums.forEach((num) => {
    if (num > 4) {
        firstNums.push(num)
    }
})
// console.log(firstNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bks) => bks.genre === 'History')  // fetching from database
console.log(userBooks)

userBooks = books.filter((bks) => {
    return bks.publish > 2000  && bks.genre === 'Science'  // explicit return
})
console.log(userBooks)