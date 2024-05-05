let randomNumber = parseInt((Math.random() * 100) + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')  // targetting value as text entered by user
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    // to check guess done by user is valid or not
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            diplayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            diplayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Entered number is TOO Low`)
    } else {
        displayMessage(`Entered number is TOO High`)
    }
}
function diplayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '') // user won't be able to interact with input
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
}