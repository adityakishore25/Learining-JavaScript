// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {  // 6 is the number of digit in a hex code of a color
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
// console.log(randomColor())
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
