function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices].toUpperCase();
}

function round(playerSelection, computerSelection){
   if(playerSelection != computerSelection){
        return "you lose";
    }
    else{
        return "you win";
    }
}

const computerSelection = (computerChoice());
const playerSelection = prompt.toUpperCase();

console.log(round(playerSelection, computerSelection));