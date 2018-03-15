document.querySelector("#r").addEventListener("click", playerRock);
document.querySelector("#p").addEventListener("click", playerPaper);
document.querySelector("#s").addEventListener("click", playerScissors);


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

    if (winner == 0){
        var result = "The round was a draw";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        var textResult = node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(textResult);
    }

    else if (winner == 1){
        var result = playerChoice + " beats " + computerChoice + "! Player wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        var textResult = node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(textResult);
    }

    else if (winner == 2){
        var result = computerChoice + " beats " + playerChoice + "! Computer wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        var textResult = node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(textResult);
    }
}