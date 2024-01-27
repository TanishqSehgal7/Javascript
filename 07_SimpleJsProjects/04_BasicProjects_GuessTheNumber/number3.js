let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const numberInputBox = document.querySelector('#guessField')
const submitBtn = document.querySelector('#subt')
const prevGuessesTextBox = document.querySelector('.guesses')
const remainingGuessesTextBox = document.querySelector('.lastResult')
const loOrHiText = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const prevGuesses = []
const totalGuesses = 10;
let guessCount = 0;
let playGame = true

const newGameBtn = document.createElement('button')

if(playGame) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(numberInputBox.value)
        validateUserInput(guess)
        numberInputBox.value = ''    
    });
}


function validateUserInput(guess) {
    if(isNaN(guess)) {
        alert("Enter a valid number between 1 and 100")
    } else if(guess === '' || guess === "") {
        alert("Input should be a number!")
    } else if(guess < 1) {
        alert("Number to be entered should be greater than 1")
    } else if(guess > 100) {
        alert("Number to be entered should be less than 100")
    } else {
        console.log(`GuessCount less than 10: ${guessCount}`)
        if(guessCount < totalGuesses) {
            prevGuesses.push(guess)
            displayAllPrevGuesses(prevGuesses)
            checkGuessValue(guess)
        }
        if(guessCount > totalGuesses) { // terminate the game and start a new one
            console.log(`GuessCount greater than total guesses: ${guessCount}`)
            displayMessage(`Game Over. Correct Value of Random Number was ${randomNumber}`)
            endGame() // end game and start new on button click
        }
    }
}


function checkGuessValue(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right. ${guess} is the correct answer.`)
        endGame()
    } else if(guess > randomNumber) {
        displayMessage('Number entered is TOO High')
    } else if(guess < randomNumber) {
        displayMessage('Number entered is TOO Low')
    }
}

function displayAllPrevGuesses(prevGuesses) {
    let guessList = ""
    prevGuesses.forEach(element => {
        guessList += (element + ", ")
    });
    guessCount++
    console.log(`GuessCount: ${guessCount}`)
    prevGuessesTextBox.innerHTML = guessList
    remainingGuessesTextBox.innerHTML = `${totalGuesses-guessCount}`
}

function displayMessage(message) {
    loOrHiText.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    numberInputBox.value = ''
    numberInputBox.setAttribute('disabled', '')
    resultParas.appendChild(newGameBtn)
    newGameBtn.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    newGameBtn.style.borderRadius = "10px"
    playGame = false
    newGame()
}

function newGame() {
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = []
        guessCount = 0
        prevGuessesTextBox.innerHTML = ''
        remainingGuessesTextBox.innerHTML = ''
        numberInputBox.removeAttribute('disabled',)
        playGame = true
        resultParas.removeChild(newGameBtn)
    })
}



