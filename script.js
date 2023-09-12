const computerScoreResult = document.querySelector('#comp-score');
const playerScoreResult = document.querySelector('#player-score');
const rockBtn = document.querySelector('#rock');
 const paperBtn = document.querySelector('#paper');
 const scissorsBtn = document.querySelector('#scissors');
const restartBtn = document.querySelector('#again');
const res = document.querySelector('#res')
const wRes = document.querySelector('#w-res');
const lRes = document.querySelector('#l-res');

const option = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
function getComputerChoice() {
  const choise = option[Math.floor(Math.random() * option.length)];
  return choise;
}
 
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection){
   return "Tie"
  } else if (
   (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock"))
  {
    return "Player";
  }
  else {                                                           
   return "Computer";
  }
}
rockBtn.addEventListener('click', () => {
 const computerSelection = getComputerChoice();
 const playerSelection = "rock";
 checkWinner(playerSelection, computerSelection);
 playRound(playerSelection, computerSelection);
 checkForWinner(scorePlayer, scoreComputer);
 })
 paperBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  checkWinner(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  checkForWinner(scorePlayer, scoreComputer);
  })
  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    checkWinner(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    checkForWinner(scorePlayer, scoreComputer);
    })
    restartBtn.addEventListener('click', () =>{
      location.reload()
    })
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    res.innerHTML = "It's a Tie!";
    return "It's a Tie!"
  } 
  else if(result == "Player" &&  scorePlayer < 5 && scoreComputer < 5){
    scorePlayer++;
    res.innerHTML = `You Win! ${playerSelection} beats ${computerSelection} `;
    return `You Win! ${playerSelection} beats ${computerSelection} `
  }
  else if(result == "Computer" &&  scorePlayer < 5 && scoreComputer < 5){
    scoreComputer++;
    res.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}
 function checkForWinner(scorePlayer, scoreComputer){
  computerScoreResult.innerHTML = `${scoreComputer}`;
  playerScoreResult.innerHTML = ` ${scorePlayer}`;
 if(scorePlayer >= 5){
  res.innerHTML = null;
  wRes.innerHTML = "You Won the game!!!";
  lRes.innerHTML = null;
  return "You Won the game!!!!"
 }
 else if(scoreComputer >= 5){
  res.innerHTML = null;
  lRes.innerHTML = "You Lost the game :(";
  wRes.innerHTML = null;
  return "You Lost the game :("
 }
 }
