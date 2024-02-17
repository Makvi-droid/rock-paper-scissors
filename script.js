function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices].toUpperCase();
}




    function round(playerSelection, computerSelection){
        switch(playerSelection){
     
         case "rock".toUpperCase():
             switch(computerSelection){
                 case "rock".toUpperCase():
                     return "It\'s a draw!";
                 case "paper".toUpperCase():
                     return "You lose";
                 case "scissors".toUpperCase():
                     return "You win";
             }
             break;
     
         case "paper".toUpperCase():
             switch(computerSelection){
                 case "rock".toUpperCase():
                     return "You win";
                 case "paper".toUpperCase():
                     return "It\s a draw!";
                 case "scissors".toUpperCase():
                     return "You lose";
             }
             break;
     
         case "scissors".toUpperCase():
             switch(computerSelection){
                 case "rock".toUpperCase():
                     return "You lose";
                 case "paper".toUpperCase():
                     return "You win";
                 case "scissors".toUpperCase():
                     return "It\s a draw!";
             }
             break;
             default:
                 return "Invalid, Pls only pick rock paper or scissors";
     
        }
     }






const computerSelection = computerChoice();
const playerSelection = window.prompt().toUpperCase();
console.log("Player picked: " + playerSelection)
console.log("Computer picked: " + computerSelection);

console.log(round(playerSelection, computerSelection));