const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.getElementById("displayWinner");

btnRock.addEventListener('click', function(){
    playerPick.textContent = 'Player picked rock';
});

btnPaper.addEventListener('click', function(){
    playerPick.textContent = 'Player picked paper';
});

btnScissors.addEventListener('click', function(){
    playerPick.textContent = 'Player picked scissors';
});






    