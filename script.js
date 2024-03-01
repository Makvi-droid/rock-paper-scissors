const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const playerPick = document.getElementById('playerPick');
const computerChoice = document.getElementById('computerChoice');
const displayWinner = document.getElementById('displayWinner');
const roundWinner = document.getElementById('roundWinner');
const overallWinner = document.getElementById('overallWinner');

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function computerPick() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    switch (player) {
        case "rock":
            switch (computer) {
                case "rock":
                    return "IT'S A TIE";
                case "paper":
                    computerScore++;
                    return "YOU LOSE";
                case "scissors":
                    playerScore++;
                    return "YOU WIN";
            }
            break;

        case "paper":
            switch (computer) {
                case "rock":
                    playerScore++;
                    return "YOU WIN";
                case "paper":
                    return "IT'S A TIE";
                case "scissors":
                    computerScore++;
                    return "YOU LOSE";
            }
            break;

        case "scissors":
            switch (computer) {
                case "rock":
                    computerScore++;
                    return "YOU LOSE";
                case "paper":
                    playerScore++;
                    return "YOU WIN";
                case "scissors":
                    return "IT'S A TIE";
            }
            break;
    }
}

function updateScores() {
    roundWinner.textContent = `Round ${roundCount} - Player: ${playerScore} Computer: ${computerScore}`;
}

function checkOverallWinner() {
    if (playerScore >= 3) {
        overallWinner.textContent = "Overall Winner: Player";
        resetGame();
    } else if (computerScore >= 3) {
        overallWinner.textContent = "Overall Winner: Computer";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function endGame() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    displayWinner.textContent = "";
    if (playerScore > computerScore) {
        overallWinner.textContent = "Overall Winner: Player";
    } else if (computerScore > playerScore) {
        overallWinner.textContent = "Overall Winner: Computer";
    } else {
        overallWinner.textContent = "Overall Winner: It's a tie!";
    }
}

btnRock.addEventListener('click', function () {
    const playerSelect = "rock";
    const computerSelect = computerPick();
    playerPick.textContent = "Player picked rock";
    computerChoice.textContent = "Computer picked " + computerSelect;
    const result = playRound(playerSelect, computerSelect);
    displayWinner.textContent = result;
    roundCount++;
    updateScores();
    checkOverallWinner();
    if (roundCount === 5) {
        endGame();
    }
});

btnPaper.addEventListener('click', function () {
    const playerSelect = "paper";
    const computerSelect = computerPick();
    playerPick.textContent = "Player picked paper";
    computerChoice.textContent = "Computer picked " + computerSelect;
    const result = playRound(playerSelect, computerSelect);
    displayWinner.textContent = result;
    roundCount++;
    updateScores();
    checkOverallWinner();
    if (roundCount === 5) {
        endGame();
    }
});

btnScissors.addEventListener('click', function () {
    const playerSelect = "scissors";
    const computerSelect = computerPick();
    playerPick.textContent = "Player picked scissors";
    computerChoice.textContent = "Computer picked " + computerSelect;
    const result = playRound(playerSelect, computerSelect);
    displayWinner.textContent = result;
    roundCount++;
    updateScores();
    checkOverallWinner();
    if (roundCount === 5) {
        endGame();
    }
});
