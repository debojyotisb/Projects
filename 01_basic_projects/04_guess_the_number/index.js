
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log("Input Number:", guess);
    })
}


const currentNumber = document.querySelector('#currentNumber');
// let newNum = currentNumber.innerHTML = randomNumber;
// console.log("CurrentNumber", newNum);

function validateGuess (guess) {
    // This function will validate the input which is number between 1 and 100 or not.

    if(isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. You lost. The number was ${randomNumber}.`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess (guess) {
    // This function will check the guess is correct or not, and guess value is high or low. And check guess will print the message.

    if (guess === randomNumber) {  
        displayMessage(`You got it right. It took you ${numGuess} guesses.`)} else if (guess < randomNumber) {
            displayMessage(`Your guess is too low. You have ${11 - numGuess} guesses left.`)} else if (guess > randomNumber) {
                displayMessage(`Your guess is too high. You have ${11 - numGuess} guesses left.`)}
};

function displayGuess (guess) {
    // it will clean the input box for again guess, and guess number will store in the array. and low or high message will print.

    userInput.value = "";
    guessSlot.innerHTML += ` ${guess} `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess} guesses left.`

    if (guess < randomNumber) { 
        lowOrHi.innerHTML = "Your guess is too low" 
    } else if (guess > randomNumber) {
        lowOrHi.innerHTML = "Your guess is too high"
    };
};

function displayMessage (message) {
    // it will interact with DOM and display the message.
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};

function endGame() {
    // For end the game.
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id=
    'newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

function newGame() {
    // For new game.
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess} guesses left.`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
};



