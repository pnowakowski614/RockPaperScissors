// function that pseudo-randomly generates computer choice

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

// one round function, returns the result of a round (-1, 0, 1)
// -1 is a computer win, 0 is a tie, 1 is the player win

function RockPaperScissors(playerSelection, computerSelection, message) {
    let userMessage = "You chose: " + playerSelection;
    let computerMessage = "Computer chose: " + computerSelection;
    let winMessage = "You won! " + playerSelection + " beats " + computerSelection;
    let loseMessage = "You lost! " + computerSelection + " beats " + playerSelection;
    let tieMessage = "It's a tie! You both chose " + playerSelection;

    const computerChoiceDisplay = document.getElementById("computer-choice");
    computerChoiceDisplay.textContent = computerMessage;
    const userChoiceDisplay = document.getElementById("user-choice");
    userChoiceDisplay.textContent = userMessage;

    if (playerSelection === computerSelection) {
        message.textContent = tieMessage;
        return 0;
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            message.textContent = winMessage;
            return 1;
        }
        else {
            message.textContent = loseMessage;
            return -1;
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            message.textContent = winMessage;
            return 1;
        }
        else {
            message.textContent = loseMessage;
            return -1;
        }
    }
    else {
        if (computerSelection === "Rock") {
            message.textContent = winMessage;
            return 1;
        }
        else {
            message.textContent = loseMessage;
            return -1;
    }
}
}

//game function includes player's choice, score-keeping, 5 rounds,
//and a winner announcement

function game() {

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    let modal = document.getElementById("myModal");

    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.getElementById("user-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const modalText = document.getElementById("modal-text");

    let firstMessage = "Make your choice! Rock, Paper or Scissors?";
    const message = document.getElementById('messages');
    message.textContent = firstMessage;

    function playRound() {
        let value;
        value = RockPaperScissors(playerSelection, computerPlay(), message);
        if (value === 1) {
            ++playerScore;
            playerScoreDisplay.textContent = playerScore;
            }
        if (value === -1) {
            ++computerScore;
            computerScoreDisplay.textContent = computerScore;
        }
        if (computerScore === 5 || playerScore === 5) {
            if(playerScore > computerScore) {
                modal.style.display = "block"; 
                modalText.textContent = "Congratulations! You've won " + playerScore + " to " + computerScore + "!";
            }//alert("Congratulations! You've won " + playerScore + " to " + computerScore);
            else {
                modal.style.display = "block";
                modalText.textContent = "Bad luck! You've lost " + playerScore + " to " + computerScore + "!";
            } //alert("Bad luck! You've lost " + playerScore + " to " + computerScore);
       }    
    }

    rock.addEventListener('click', () => {
        playerSelection = "Rock";
        playRound();
        });
        
    scissors.addEventListener('click', () => {
        playerSelection = "Scissors";
        playRound();
        });

    paper.addEventListener('click', () => {
        playerSelection = "Paper";
        playRound();
        });
}   


game();