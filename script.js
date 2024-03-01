const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const playerPick = document.getElementById('playerPick');
const computerChoice = document.getElementById('computerChoice');
const displayWinner = document.getElementById('displayWinner');
const roundWinner = document.getElementById('roundWinner');

const choices = ["rock", "paper", "scissors"];

function computerPick(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer){
    switch(player){
        case "rock":
            switch(computer){
                case "rock":
                    return displayWinner.textContent = "IT'S A TIE";
                case "paper":
                    return displayWinner.textContent = "YOU LOSE";
                case "scissors":
                    return displayWinner.textContent = "YOU WIN";
            }
            break;
        
        case "paper":
            switch(computer){
                case "rock":
                    return displayWinner.textContent = "YOU WIN";
                case "paper":
                    return displayWinner.textContent = "IT'S A TIE";
                case "scissors":
                    return displayWinner.textContent = "YOU LOSE";
            }
            break;

        case "scissors":
            switch(computer){
                case "rock":
                    return displayWinner.textContent = "YOU LOSE";
                case "paper":
                    return displayWinner.textContent = "YOU WIN";
                case "scissors":
                    return displayWinner.textContent = "IT'S A TIE";
            }
            break;

    }
}

btnRock.addEventListener('click', function(){
    playerPick.textContent = "Player picked rock";
    computerChoice.textContent = "Compuer picked " + computerPick();
    const playerSelect = "rock";
    const computerSelect = computerPick();
    playRound(playerSelect, computerSelect);
});

btnPaper.addEventListener('click', function(){
    playerPick.textContent = "Player picked paper";
    computerChoice.textContent = "Compuer picked " + computerPick();
    const playerSelect = "paper";
    const computerSelect = computerPick();
    playRound(playerSelect, computerSelect);
});

btnScissors.addEventListener('click', function(){
    playerPick.textContent = "Player picked scissors";
    computerChoice.textContent = "Compuer picked " + computerPick();
    const playerSelect = "scissors";
    const computerSelect = computerPick();
    playRound(playerSelect, computerSelect);
});