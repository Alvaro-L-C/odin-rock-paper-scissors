let computerScore = 0;
let playerScore = 0;
let result = '';
let lastPlayerOption = '';

function getComputerPlay() {
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        result = 'draw';
    } else if (
            (playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock')    ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
                playerScore++;
                result = 'player'
            }
    else {
        computerScore++;
        result = 'computer';
    }
}


function gameCompleted() {
    return playerScore == 5 || computerScore == 5;
}

const playResult = document.getElementById('playResult');
const playMessage = document.getElementById('playMessage');
const computerScrID = document.getElementById('computerScore');
const playerScrID = document.getElementById('playerScore');
const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const computerSelImage = document.getElementById('computerPlay');
const restart = document.getElementById('restart');

playerPaper.addEventListener('click',  () => startRound('paper'));
playerRock.addEventListener('click', () => startRound('rock'));
playerScissors.addEventListener('click', () => startRound('scissors'));
restart.addEventListener('click', () => reloadPage());

function startRound(playerSelection){
    if (!gameCompleted()){
        const computerSelection = getComputerPlay();
        playRound(playerSelection, computerSelection);
        updateScoreboard(playerSelection, computerSelection);
        changeImage(computerSelection);
        addCSSClass(playerSelection);
    }

    if(gameCompleted() && restart.classList.contains('hidden')){
        restart.classList.remove('hidden');
    }
}
function updateScoreboard(playerSelection, computerSelection) {
    if(result == 'draw') {
        playResult.textContent = 'You Draw!'
        playMessage.textContent = `You both chose ${playerSelection}`;
    } else if(result == 'player'){
        playerScrID.textContent = `Player: ${playerScore}`;
        playResult.textContent = 'You Win!'
        playMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    } else {
        computerScrID.textContent = `Computer: ${computerScore}`;
        playResult.textContent = 'You Lose!'
        playMessage.textContent = `${computerSelection} beats ${playerSelection}`;
    }
}

function addCSSClass(playerSelect){
    document.querySelector(`#${playerSelect} img`).style.border = '5px #191919 solid';
    if(lastPlayerOption != '' && playerSelect != lastPlayerOption){
        document.querySelector(`#${lastPlayerOption} img`).style.border = '5px solid transparent';
    } else {
        computerSelImage.style.border = '5px #191919 solid';
    }
    lastPlayerOption = playerSelect;
}

function changeImage(computerSelection) {
    if(computerSelImage.alt == computerSelection) return;
    else {
        computerSelImage.alt = computerSelection;
        computerSelImage.src = `./img/${computerSelection}.png`;
    }
}

function reloadPage() {
    window.location.reload(true);
}
