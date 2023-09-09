const computerScoreResult = document.querySelector('#comp-score');
const playerScoreResult = document.querySelector('#player-score');
const rockBtn = document.querySelector('#rock');
 const paperBtn = document.querySelector('#paper');
 const scissorsBtn = document.querySelector('#scissors');
 const playBtns = document.querySelectorAll('.btn');
 const resultBoard = document.querySelector('#res');
const restartBtn = document.querySelector('#again');

const option = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choise = option[Math.floor(Math.random() * option.length)];
  console.log(choise);
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
 })
 paperBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  checkWinner(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  })
  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    checkWinner(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    })
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    console.log("It's a Tie!");
    return "It's a Tie!"
  } 
  else if(result == "Player"){
    console.log( `You Win! ${playerSelection} beats ${computerSelection} `);
    return `You Win! ${playerSelection} beats ${computerSelection} `
  } 
  else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } 
}
