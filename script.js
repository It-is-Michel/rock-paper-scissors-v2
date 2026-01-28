function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // 1 = rock; 2 = paper; 3 = scissors

    switch (randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose 'rock', 'paper' or 'scissors' by writing it or using a number from 1 to 3", "rock")

    switch (humanChoice.toLocaleLowerCase()) {
        case "rock":
        case "1":
            return "rock";
            
        case "paper":
        case "2":
            return "paper";

        case "scissors":
        case "3":
            return "scissors";
    }
}