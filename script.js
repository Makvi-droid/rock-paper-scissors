function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices].toUpperCase();
}

console.log(computerChoice());