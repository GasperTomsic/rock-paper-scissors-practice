let playerWins = 0
let computerWins = 0

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
    // Logic for tie
    resultDiv = document.querySelector("#gameResult");

    if (playerWins >= 5) {
        alert("Player won.")
    } else if (computerWins >= 5) {
        alert("Computer won.")
    } else {
        // You can play until either computer or player wins
        if (playerSelection === computerSelection) {
            resultDiv.textContent = "Tie";
            return "tie this round";                
        // Logic for player victory
        } else if ((playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
            resultDiv.textContent = "Player wins!";
            playerWins += 1
            let scorePlayerUpdateString = "Player wins: " + playerWins
            document.getElementById('playerScore').innerHTML = scorePlayerUpdateString;
            return "player wins this round";
        // Logic for computer victory
        } else if ((playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock")) {
            resultDiv.textContent = "Computer wins";
            computerWins += 1
            let scoreComputerUpdateString = "Computer wins: " + computerWins
            document.getElementById('computerScore').innerHTML = scoreComputerUpdateString;
            return "computer wins this round";
        }
    }
    // Change scoreboard

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
/*
function game(numRounds = 5){
    numTies = 0;
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i<numRounds; i++) {
        let playerSelection = prompt("Please enter rock, paper or scissors");
        result = playRound(playerSelection, getComputerChoice())
        if (result === "tie") {
            numTies += 1
        } else if (result === "player wins") {
            playerWins += 1
        } else if (result === "computer wins") {
            computerWins += 1
        }
        console.log(result)
    }
    console.log("Player won " + playerWins + " time/s")
}
*/

// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
