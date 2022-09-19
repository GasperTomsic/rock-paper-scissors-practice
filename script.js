// Game Logic

let playerWins = 0
let computerWins = 0
let roundWinner = ""

// const btns = document.querySelectorAll(".playButton");
/*
btns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
        computerChoice = getComputerChoice()
        playRound(button.textContent, computerChoice)
        updateScore()
    })
})
*/

function getComputerChoice() {
    // Function returns random string from a choice of ("paper", "rock", "scissors")
    
    const randInt =  Math.floor(Math.random() * 3); // Returns integer 0, 1 or 2
    
    switch (randInt) {
    case 0: 
        return "paper"
    case 1: 
        return "rock"
    case 2: 
        return "scissors"
    }
}
function playRound(playerSelection, computerSelection){
    
    if (playerWins >= 5) {
        alert("Player won.")
    } else if (computerWins >= 5) {
        alert("Computer won.")
    } else {
        // You can play until either computer or player wins
        if (playerSelection === computerSelection) {
            roundWinner = "tie";         
        // Logic for player victory
        } else if ((playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
                    
            roundWinner = "player";
            playerWins += 1;
        // Logic for computer victory
        } else if ((playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock")) {
            roundWinner = "computer";
            computerWins += 1;
        }
        
    }
    // Change scoreboard
    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function resetGameState() {
    playerWins = 0
    computerWins = 0
    
    scoreInfo.textContent = "Choose your weapon!"
    scoreMessage.textContent = "First to score 5 points wins the game."
    
    playerScoreDiv.textContent = "Player: " + playerWins
    computerScoreDiv.textContent = "Computer: " + computerWins
}
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGameState);


function isGameOver() {
    return playerWins === 5 || computerWins === 5
}
// UI Logic

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreDiv = document.getElementById("playerScore");
const computerScoreDiv = document.getElementById("computerScore");

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))


function handleClick(playerSelection) {

    // This way of stopping the game is not nice, because pop alert will stop the browser from updating 
    // the score. 
    // This forcefully stops player from playing after win/loss
    if (isGameOver()) { 
        if (playerWins >= 5) {
            alert("Player won.")
        } else if (computerWins >= 5) {
            alert("Computer won.")
        }
    } 
    const computerChoice =  getComputerChoice();
    playRound(playerSelection, computerChoice);
    updateScore();
    // This will trigger when you win for the first time
    if (isGameOver()) { 
        if (playerWins >= 5) {
            alert("Player won.")
        } else if (computerWins >= 5) {
            alert("Computer won.")
        }
    }
}
function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScoreDiv.textContent = "Player: " + playerWins
    computerScoreDiv.textContent = "Computer: " + computerWins
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === "player") {
        scoreMessage.textContent = playerSelection + " beats " + computerSelection
        return
    } else if (winner === "computer") {
        scoreMessage.textContent = playerSelection + " beats " + computerSelection
        return 
    } else {
        scoreMessage.textContent = playerSelection + " ties with " + computerSelection
    }
}