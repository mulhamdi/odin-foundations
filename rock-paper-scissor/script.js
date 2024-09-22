// Global variables
let playerScore = 0;
let computerScore = 0;


// DOM and Event listener
const buttons = document.querySelectorAll('#selections > button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id))
})

const scoreboard = document.querySelector('#scoreboard');
const currentResult = document.querySelector('.current-result');
const currentPlayerScore = document.querySelector('.current-player-score');
const currentComputerScore = document.querySelector('.current-computer-score');

const finalWinner = document.querySelector('#winner');


// Functions
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        updateResult(`It's a tie! ${playerSelection} is equal to ${computerSelection}.`)
    } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')
    ) {
        ++playerScore;
        updateResult(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        ++computerScore;
        updateResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateResult(roundResult) {
    currentResult.textContent = roundResult;
    currentPlayerScore.textContent = `Player score: ${playerScore}`;
    currentComputerScore.textContent = `Computer score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore)
            finalWinner.textContent = 'You win!';
        else
            finalWinner.textContent = 'You Lose!';

        disableButton();
        scoreboard.setAttribute('style', 'color: #6e6e6e');
    }
}

function disableButton() {
    buttons.forEach((button) => button.disabled = true);
}