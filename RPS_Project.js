function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:");
     if (userInput === null) {
        alert("Input cannot be null. Please enter rock, paper, or scissors.");
        return null; 
    }
    userInput = userInput.toLowerCase();
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        console.log("Invalid input. Please try again.");
        return getHumanChoice();
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function game() {
    humanScore = 0;
    computerScore = 0;
    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    }
    else {
        console.log("The game is a tie!");
    }
}

game();