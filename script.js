const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerChoice");
const displayWinner = document.getElementById("displayWinner");

function computerChoice() {
    let choices = [btnRock, btnPaper, btnScissors];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices].id;
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection.id){
 
     case "rock":
         switch(computerSelection){
             case "rock":
                 return displayWinner.textContent = "It's a draw";
             case "paper":
                 return displayWinner.textContent = "You lose";
             case "scissors":
                 return displayWinner.textContent = "You Win";
         }
         break;
 
     case "paper":
         switch(computerSelection){
             case "rock":
                 return displayWinner.textContent = "You win";
             case "paper":
                 return displayWinner.textContent = "It's a draw";
             case "scissors":
                 return displayWinner.textContent = "You lose";
         }
         break;
 
     case "scissors":
         switch(computerSelection){
             case "rock":
                 return displayWinner.textContent = "You lose";
             case "paper":
                 return displayWinner.textContent = "You win";
             case "scissors":
                 return displayWinner.textContent = "It's a draw";
         }
         break;
 
    }
 }

btnRock.addEventListener('click', function(){
    playerPick.textContent = "Player picked Rock";
    computerPick.textContent = "Computer picked " + computerChoice();
    playRound(btnRock, computerChoice());
});

btnPaper.addEventListener('click', function(){
    playerPick.textContent = "Player picked Paper";
    computerPick.textContent = "Computer picked " + computerChoice();
    playRound(btnPaper, computerChoice());
 });

 btnScissors.addEventListener('click', function(){
    playerPick.textContent = "Player picked Scissors";
    computerPick.textContent = "Computer picked " + computerChoice();
    playRound(btnScissors, computerChoice());
 });













    