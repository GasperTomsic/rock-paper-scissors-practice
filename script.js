// Game Logic

let playerWins = 0
let computerWins = 0
let roundWinner = ""

const btns = document.querySelectorAll(".playButton");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
        computerChoice = getComputerChoice()
        playRound(button.textContent, computerChoice)
    })
})
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
            roundWinner = "tie"                
        // Logic for player victory
        } else if ((playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
            
            roundWinner = "player"
            playerWins += 1
            let scorePlayerUpdateString = "Player wins: " + playerWins
            document.getElementById('playerScore').innerHTML = scorePlayerUpdateString;
        // Logic for computer victory
        } else if ((playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock")) {
            roundWinner = "computer"
            computerWins += 1
            let scoreComputerUpdateString = "Computer wins: " + computerWins
            document.getElementById('computerScore').innerHTML = scoreComputerUpdateString;
        }
        
    }
    // Change scoreboard
    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function resetGameState() {
    playerWins = 0
    computerWins = 0

    let scorePlayerUpdateString = "Player wins: " + playerWins
    document.getElementById('playerScore').innerHTML = scorePlayerUpdateString;

    let scoreComputerUpdateString = "Computer wins: " + computerWins
    document.getElementById('computerScore').innerHTML = scoreComputerUpdateString;
}
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGameState);

// UI Logic

const scoreMessage = document.getElementById('scoreMessage')

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