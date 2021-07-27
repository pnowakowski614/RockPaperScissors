function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3 + 1);
    if (computerChoice === 1) {
        return "Rock";
    }
    else if (computerChoice === 2) {
        return "Scissors"
    }
    else {
        return "Paper"
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function RockPaperScissors(playerSelection, computerSelection) {
    let computerMessage = "Computer chose: " + computerSelection + "\n\n";

    let winMessage = computerMessage + "You won! " + playerSelection + " beats " + computerSelection;
    let loseMessage = computerMessage + "You lost! " + computerSelection + " beats " + playerSelection;
    let tieMessage = computerMessage + "It's a tie! You both chose " + playerSelection;

    if (playerSelection === computerSelection) {
        return tieMessage;
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") return winMessage;
        else return loseMessage;
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") return winMessage;
        else return loseMessage;
    }
    else {
        if (computerSelection === "Rock") return winMessage;
        else return loseMessage;
    }

}

function game() {
    for(let i = 0; i < 5; i++) {

        let playerSelection = capitalize(prompt("Make your choice! Rock, Paper or Scissors?"));

        while((playerSelection !== "Rock") && (playerSelection !== "Paper") && (playerSelection !== "Scissors"))  {
        playerSelection = capitalize(prompt("Wrong choice! Rock, Paper or Scissors?"));
        } 
        console.log(RockPaperScissors(playerSelection, computerPlay()));
    }
}

game();