document.querySelector("#r").addEventListener("click", playerRock);
document.querySelector("#p").addEventListener("click", playerPaper);
document.querySelector("#s").addEventListener("click", playerScissors);

var computerScore = 0;
var playerScore = 0;
var currentRound = 0;

function playerRock() {
    playRound("ROCK");
}

function playerPaper() {
    playRound("PAPER");
}

function playerScissors() {
    playRound("SCISSORS");
}

function computerPlay() {
    var choice = Math.floor(Math.random() * (3)) + 1;

    if (choice == 1) {
        return "ROCK";
    }

    if (choice == 2) {
        return "PAPER";
    }

    if (choice == 3) {
        return "SCISSORS";
    }
}

function playRound(playerSelection) {

    var computerSelection = computerPlay().toUpperCase();

    if (playerSelection == computerSelection) {
        displayResult(playerSelection, computerSelection, 0);
    }

    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

            displayResult(playerSelection, computerSelection, 1);

    }

    else if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")) {

            displayResult(playerSelection, computerSelection, 2);

    }
}

function displayResult(playerChoice, computerChoice, winner) {

    currentRound += 1;

    if (winner == 0){
        
        var result = "The round was a draw";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
    }

    else if (winner == 1){
        var result = playerChoice + " beats " + computerChoice + "! Player wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
        playerScore += 1;
        
        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);

    }

    else if (winner == 2){
        var result = computerChoice + " beats " + playerChoice + "! Computer wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
        computerScore += 1;

        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);
    }
}

function winnerCheck(cScore, pScore){
    if (cScore == 5) {
        console.log("Computer wins the match!");
    }

    if (pScore == 5) {
        console.log("Player wins the match!");
    }

    else {
        return;
    }
}

function updateScoreboard(cScore, pScore){
    document.getElementById("scorePlayer").innerHTML = pScore;
    document.getElementById("scoreComputer").innerHTML = cScore;
}