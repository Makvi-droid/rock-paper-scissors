const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerChoice");
const displayWinner = document.getElementById("displayWinner");
const roundWinner = document.getElementById("roundWinner");

function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

let playerCount = 0;
let computerCount = 0;
let result;

for(let i = 1; i <= 5; i++){

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
        const computerSelection = computerChoice();
        computerPick.textContent = "Computer picked " + computerSelection;
        result = playRound(btnRock, computerSelection);

        if(result === "You win"){
            playerCount++;

        }
        else if(result === "You lose"){
            computerCount++;
        }
    });
    
    btnPaper.addEventListener('click', function(){
        playerPick.textContent = "Player picked Paper";
        const computerSelection = computerChoice();
        computerPick.textContent = "Computer picked " + computerSelection;
        result = playRound(btnPaper, computerSelection);

        if(result === "You win"){
            playerCount++;

        }
        else if(result === "You lose"){
            computerCount++;
        }
     });
    
     btnScissors.addEventListener('click', function(){
        playerPick.textContent = "Player picked Scissors";
        const computerSelection = computerChoice();
        computerPick.textContent = "Computer picked " + computerSelection;
        result = playRound(btnScissors, computerSelection);

        if(result === "You win"){
            playerCount++;

        }
        else if(result === "You lose"){
            computerCount++;
        }
     });
       
}

if(playerCount > computerCount){
    roundWinner.textContent = "Player won!";
}

else if (computerCount > playerCount){
    roundWinner.textContent = "Computer Won!, you suck";
}

else{
    roundWinner.textContent = "Wtf who won??";
}
















    