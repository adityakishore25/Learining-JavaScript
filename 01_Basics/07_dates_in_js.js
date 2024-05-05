let mydate = new Date()
// Date is an object in js
// console.log(mydate)  //2023-10-24T16:06:25.393Z
// console.log(mydate.toString())  //Tue Oct 24 2023 21:36:25 GMT+0530 (India Standard Time)
// console.log(mydate.toLocaleString())  //24/10/2023, 9:36:25 pm
// console.log(mydate.toDateString())    //Tue Oct 24 2023
// console.log(mydate.toTimeString())   //21:38:37 GMT+0530 (India Standard Time)
// console.log(mydate.toISOString())   //  2023-10-24T16:08:37.548Z => ISO---yy-mm-dd

// console.log(mydate.toJSON()) //  2023-10-24T16:08:37.548Z => ISO---yy-mm-d

// console.log(mydate.toLocaleDateString())           // 24/10/2023

let myCreatedDate = new Date(2024, 2, 16)  // yyyy,mm,dd   (Months start with 0 index and goes in circular fassion  i.e. for jan write 0 for month)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate1 = new Date("2023-02-20")
// console.log(myCreatedDate1.toLocaleString()) 

let myTimeStamp = Date.now()

console.log(myTimeStamp)   // number of mili seconds from 1st jan 1970, used to compare time

// console.log(myCreatedDate1.getTime())      //number of mili seconds from 1st jan 1970 till that particular date 

// console.log(Math.floor(Date.now() / 1000))      // converting today's date to second from 1st jan 1970

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate)

newDate.toLocaleString('default', {
    weekday: "long"
})

