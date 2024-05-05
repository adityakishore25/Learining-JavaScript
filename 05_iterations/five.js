const coding = ['CPP', 'C', 'Java', 'Pyhton', 'JavaScript']
//  using for each loop in an array
coding.forEach(function (val) {  // function with no function name (callback function, syntax), val is the iterator
    // console.log(val)
})

// using arrow function, instead a normal function

coding.forEach((item) => {      // arrow function with no name   
    // console.log(item)
})

function printMe(item) {
    // console.log(item)
}

coding.forEach(printMe) // using a already defined function, by just passing the reference

coding.forEach((item, index, arr) => {  // forEach has the access of items, indexes and whole array as well
    // console.log(item, index, arr)
})

const myObject = [   // date from datebase come in the form of array of objects
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
]

myObject.forEach((item) => {
    // console.log(item)  // gives an object
    // console.log(item.languageName)  // give the language name property of each object
})
