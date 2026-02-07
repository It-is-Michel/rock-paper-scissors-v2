function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // 1 = rock; 2 = paper; 3 = scissors

    switch (randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose 'rock', 'paper' or 'scissors'", "rock")

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    function computerWins() {
        ++computerScore;
        updateDisplay(`Computer wins, ${computerChoice} beats ${humanChoice}!`);
    }

    function humanWins() {
        ++humanScore;
        updateDisplay(`Human wins, ${humanChoice} beats ${computerChoice}!`);
    }

    if (humanChoice == computerChoice) {
        updateDisplay(`It's a draw!`);
    } else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "scissors" && computerChoice == "rock") {
        computerWins();
    } else {
        humanWins();
    }
}

let resultsDisplayDivElement = document.querySelector("#resultsDisplay");
function updateDisplay(message) {

    if (!typeof message === "string") return "ERROR";

    resultsDisplayDivElement.textContent = message;

    resultsDisplayDivElement.textContent += `\nHuman Score: ${humanScore}`;

    resultsDisplayDivElement.textContent += `\nComputer Score: ${computerScore}`;

    if (humanScore == 5) {
        resultsDisplayDivElement.textContent += `Human won!`;
    } else if (computerScore == 5) {
        resultsDisplayDivElement.textContent += `Computer won!`;
    }
}

let rockButtonElement = document.querySelector("#rock");
let paperButtonElement = document.querySelector("#paper");
let scissorsButtonElement = document.querySelector("#scissors");

document.body.addEventListener("click", (e) => {
    let humanSelection = "";
    switch(e.target) {
        case rockButtonElement:
            humanSelection = "rock";
            break;
        case paperButtonElement:
            humanSelection = "paper";
            break;
        case scissorsButtonElement:
            humanSelection = "scissors";
            break;
    }

    let computerChoice = getComputerChoice();
    playRound(humanSelection, computerChoice);
});