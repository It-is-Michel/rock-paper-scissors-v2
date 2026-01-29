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