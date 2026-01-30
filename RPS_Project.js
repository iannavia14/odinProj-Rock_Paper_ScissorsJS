function getComputerChoice() {
    let arrComputerChoices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * arrComputerChoices.length);
    return arrComputerChoices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    let promptHumanChoice = prompt("Please enter rock, paper, or scissors:");
    if (promptHumanChoice === null) {
        alert("Input cannot be null. Please enter rock, paper, or scissors.");
        return null; 
    }
    let userpromptHumanChoice = promptHumanChoice.toLowerCase();
    if (userpromptHumanChoice !== 'rock' && userpromptHumanChoice !== 'paper' && userpromptHumanChoice !== 'scissors') {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return null; 
    }
    return userpromptHumanChoice;
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Before round:", humanScore, computerScore);

    if (humanChoice === computerChoice) {
        return { message: "It's a tie!", winner: "tie" };
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log("Human scored →", humanScore);
        return { message: `You win! ${humanChoice} beats ${computerChoice}.`, winner: "human" };
    }

    computerScore++;
    console.log("Computer scored →", computerScore);
    return { message: `You lose! ${computerChoice} beats ${humanChoice}.`, winner: "computer" };
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game stopped.");
            return;
        }

        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`Round ${round}: ${result.message}`);
        console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
