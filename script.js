function getComputerPlay() {
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return `That was a draw! You both chose ${playerSelection}`;
    } else if (
            (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
            (playerSelection == "PAPER" && computerSelection == "ROCK")    ||
            (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
                playerScore++;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}




function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors", "Paper");
        playerSelection = playerSelection.toUpperCase();
        const computerSelection = getComputerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`${playerScore} - ${computerScore}`);
        playRound();
    }
    if(playerScore > computerScore){
        console.log(`YOU WIN! Final score: ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`YOU LOSE! Final score: ${playerScore} - ${computerScore}`);
    } else {        
        console.log(`YOU TIE! Final score: ${playerScore} - ${computerScore}`);
    }
}


game();