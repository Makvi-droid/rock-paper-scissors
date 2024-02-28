const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerChoice");
const displayWinner = document.getElementById("displayWinner");

function computerChoice() {
    let choices = [btnRock, btnPaper, btnScissors];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}


function round(playerSelection, computerSelection){
    switch(playerSelection){
 
     case btnRock.addEventListener('click', function(){
        playerPick.textContent = 'Player picked rock';
    }):
         switch(computerSelection){
             case btnRock:
                 return displayWinner.textContent = "It/'s a draw";
             case btnPaper:
                 return displayWinner.textContent = "You lose";
             case btnScissors:
                 return displayWinner.textContent = "You win";
         }
         break;
 
     case btnPaper.addEventListener('click', function(){
        playerPick.textContent = 'Player picked paper';
    }):
         switch(computerSelection){
             case btnRock:
                 return displayWinner.textContent = "You win";
             case btnPaper:
                 return displayWinner.textContent = "It/'s a draw";
             case btnScissors:
                 return displayWinner.textContent = "You lose";
         }
         break;
 
     case btnScissors.addEventListener('click', function(){
        playerPick.textContent = 'Player picked scissors';
    }):
         switch(computerSelection){
             case btnRock:
                 return displayWinner.textContent = "You lose";
             case btnPaper:
                 return displayWinner.textContent = "You win";
             case btnScissors:
                 return displayWinner.textContent = "It/'s a draw";
         }
         break;
 
    }

 }

 const computerSelection = computerChoice();
 const playerSelection = [btnPaper, btnRock, btnScissors];

 round(playerSelection, computerSelection)






    