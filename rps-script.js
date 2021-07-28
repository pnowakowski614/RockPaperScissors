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
        console.log(tieMessage);
        return 0;
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            console.log(winMessage);
            return 1;
        }
        else {
            console.log(loseMessage);
            return -1;
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            console.log(winMessage);
            return 1;
        }
        else {
            console.log(loseMessage);
            return -1;
        }
    }
    else {
        if (computerSelection === "Rock") {
            console.log(winMessage);
            return 1;
        }
        else {
            console.log(loseMessage)
            return -1;
    }
}
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = capitalize(prompt("Make your choice! Rock, Paper or Scissors?"));

        while((playerSelection !== "Rock") && (playerSelection !== "Paper") && (playerSelection !== "Scissors"))  {
        playerSelection = capitalize(prompt("Wrong choice! Rock, Paper or Scissors?"));
        } 
        let value = RockPaperScissors(playerSelection, computerPlay());

        if (value === 1) ++playerScore;
        if (value === -1) ++computerScore;

        console.log("Current Score:\n" + "You: " + playerScore + "\nComputer: " + computerScore);
    }

    if(playerScore > computerScore) console.log("Congratulations! You've won " + playerScore + " to " + computerScore);
    else if(playerScore < computerScore) console.log("Bad luck! You've lost " + playerScore + " to " + computerScore);
    else console.log("The game is a tie! You've both won " + playerScore + " times");
}   

game();