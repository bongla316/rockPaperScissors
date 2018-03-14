document.querySelector("#r").addEventListener("click", playerRock);
document.querySelector("#p").addEventListener("click", playerPaper);
document.querySelector("#s").addEventListener("click", playerScissors);


function playerRock() {
    console.log(playRound("ROCK"));
}

function playerPaper() {
    console.log(playRound("PAPER"));
}

function playerScissors() {
    console.log(playRound("SCISSORS"));
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
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        displayResult(playerSelection, computerSelection, 0);
        return "The round was a draw!";
    }

    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

        //if (playerSelection == "ROCK") {
            displayResult(playerSelection, computerSelection, 1);
            //return "Rock beats Scissors, Player wins!";
        //}

        //if (playerSelection == "PAPER") {
            
            //return "Paper beats Rock, Player wins!";
        //}

        //if (playerSelection == "SCISSORS") {
            //return "Scissors beats Paper, Player wins!";
        //}

    }

    else if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")) {

            displayResult(playerSelection, computerSelection, 2);

        //if (computerSelection == "ROCK") {
            //return "Rock beats Scissors, Computer wins!";
        //}

        //if (computerSelection == "PAPER") {
            //return "Paper beats Rock, Computer wins!";
        //}

        //if (computerSelection == "SCISSORS") {
            //return "Scissors beats Paper, Computer wins!";
        //}

    }
}

function displayResult(playerChoice, computerChoice, winner) {

    if (winner == 0){
        var result = "The round was a draw";
        var textNode = document.createTextNode(result);
        document.getElementById("displayResult").appendChild(textNode);
    }

    else if (winner == 1){
        var result = playerChoice + " beats " + computerChoice + "! Player wins!";
        var textNode = document.createTextNode(result);
        document.getElementById("displayResult").appendChild(textNode);
    }

    else if (winner == 2){
        var result = computerChoice + " beats " + playerChoice + "! Computer wins!";
        var textNode = document.createTextNode(result);
        document.getElementById("displayResult").appendChild(textNode);
    }
}