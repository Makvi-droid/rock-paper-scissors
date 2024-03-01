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

btnRock.addEventListener('click', function(){
    playerPick.textContent = "Player picked rock";
    computerChoice.textContent = "Compuer picked " + computerPick();
});

btnPaper.addEventListener('click', function(){
    playerPick.textContent = "Player picked paper";
    computerChoice.textContent = "Compuer picked " + computerPick();
});

btnScissors.addEventListener('click', function(){
    playerPick.textContent = "Player picked scissors";
    computerChoice.textContent = "Compuer picked " + computerPick();
});