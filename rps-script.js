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
    //
}


//let playerSelection = prompt("Make your choice! Rock, Paper or Scissors?");

//RockPaperScissors(capitalize(playerSelection), computerPlay());