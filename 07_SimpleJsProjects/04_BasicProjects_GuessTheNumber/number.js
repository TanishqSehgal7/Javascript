const totalGuesses = 10
let randomNumber = parseInt(Math.floor(Math.random()*100) + 1)
console.log(randomNumber)

const submit = document.querySelector('#subt')
const userInput = document.getElementById("guessField")
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('lowOrHi')
const startOver = document.querySelector('.resultParas')
const para = document.createElement('p')

const guesses = []
let previousGuesses = document.querySelector('.guesses')
let numGuesses = 1
let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault() // to hold the values
        const value = parseInt(userInput.value)
        console.log(value)
        validateUserGuess(value)
    });
}

function validateUserGuess(guessVal) {
    // for checking if the user input is correct
    if(isNaN(guessVal) || guessVal <= 0 || guessVal === "" || guessVal === '' || guessVal > 100) {
        alert("Please enter a valid number between 1 to 100")
    } else {
        if(numGuesses > totalGuesses) {
            displayGuess(guessVal)
            displayMessage(`Random Number was: ${randomNumber}`)
            endGame()
        } else {
            guesses.push(guessVal)
            displayGuess(guessVal)
            checkGuess(guessVal)
        }
    }
}

function checkGuess(guessVal) {
    // for checking if the user input = random number
    if(guessVal === randomNumber) {
        displayMessage(`You guessed the correct number!!`)
        endGame()
    } else if(guessVal < randomNumber) {
        displayMessage("Number is too low.")
    } else if(guessVal > randomNumber) {
        displayMessage("Number is too High")
    }
}

function displayGuess(guess) {
    // for displaying all previous guesses
    if(numGuesses >= 0) {
        userInput.value = ''
        previousGuesses.innerHTML += ` ${guess},`
        numGuesses++
        remaining.innerHTML = `${totalGuesses-numGuesses}`
    } else {
        displayMessage("You are out of turns!")
        playGame = false
    }
}

function displayMessage(message) {
    // for displaying all messages as results
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    // for checking if a new game is started
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        guesses = []
        numGuesses = 1
        previousGuesses.innerHTML = ''
        remaining.innerHTML = totalGuesses
        userInput.removeAttribute("disabled")
        startOver.removeChild('p')
        playGame = true
    })
}

function endGame() {
    // for checking if the current game is to be ended
    userInput.value = ''
    userInput.setAttribute("disabled", '')
    para.classList.add('button')
    para.innerHTML = `<h2 id='newGame>Start New Game</h2>`;
    startOver.appendChild(para)
    playGame = false
    newGame()
}