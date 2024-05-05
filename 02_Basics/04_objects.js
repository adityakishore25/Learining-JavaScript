const appUser = new Object()  // Singlton object
// const appUser = {}     //non-singlton object

appUser.id = "123abcd"
appUser.name = "Joe Root"
appUser.isLoggedIn = false

// console.log(appUser)

const newUser = {
    email: "new@gmail.com",
    fullname: {  // nesting in obects i.e. objects inside objects
        urerfullName: {
            firstName: "Aditya",
            lastName: "Kishore"
        }
    }
}


// console.log(newUser.name.urerfulltName)
// console.log(newUser.name.urerfulltName.lastName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
console.log(obj1.toLocaleString())
const obj3 = Object.assign({}, obj1, obj2)  // By providing the empty curly braces {} as the first argument, 
                                            //  we explicitly tell Object.assign which object to modify.

// const obj3 = { ...obj1, ...obj2 }  //  This method is used in most of the times
// console.log(obj3)

// data from database :  Important for the projects (Array of objects)
const user = [
    {
        id: 1,
        email: "Ak@gmail.com"
    },
    {
        id: 1,
        email: "Ak@gmail.com"
    },
    {
        id: 1,
        email: "Ak@gmail.com"
    },
]

user[1].email   // accessing the vlaues
// console.log(appUser)

// console.log(Object.keys(appUser))   // converting an object to an array
// console.log(Object.values(appUser))
// console.log(Object.entries(appUser))




// console.log(appUser.hasOwnProperty("isLoggedIn"))  //true    // To check that the key is present or not in the object


// Destructure the object (another way to extract properties of an object)
const course = {
    courseName: "Learning JS",
    courseInstructor: "M S Dhoni",
    coursePrice: "9999"
}

// console.log(course.courseInstructor)
// course.courseInstructor
const { courseInstructor : instructor} = course
// console.log(instructor)


// example of an API : (string : string)
// {
//     "name": "Aditya"
//     "folderName": "Learning Js"
//     "location": "Desktop"
// }

// JSON - JavaScript Object Notation