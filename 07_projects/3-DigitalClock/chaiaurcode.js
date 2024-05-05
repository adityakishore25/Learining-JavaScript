// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')  // another method

// this function can be implemented by using normal function as well
// by using arrow function
setInterval(() => { // to change the time after every 1s (1000 for 1 s, 2000 for 2 s)
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);