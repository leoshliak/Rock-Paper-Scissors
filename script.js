const computerScoreResult = document.querySelector('#comp-score');
const playerScoreResult = document.querySelector('#player-score');
const rockBtn = document.querySelector('#rock');
 const paperBtn = document.querySelector('#paper');
 const scissorsBtn = document.querySelector('#scissors');
 const playBtns = document.querySelectorAll('.btn');
 const resultBoard = document.querySelector('#res-board');
const restartBtn = document.querySelector('#again');
const res = document.querySelector('#res')
const wRes = document.querySelector('#w-res');
const lRes = document.querySelector('#l-res');

const option = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
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
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    console.log("It's a Tie!");
    res.innerHTML = "It's a Tie!";
    return "It's a Tie!"
  } 
  else if(result == "Player" &&  scorePlayer < 5 && scoreComputer < 5){
    console.log( `You Win! ${playerSelection} beats ${computerSelection} `);
    scorePlayer++;
    res.innerHTML = `You Win! ${playerSelection} beats ${computerSelection} `;
    return `You Win! ${playerSelection} beats ${computerSelection} `
  }
  else if(result == "Computer" &&  scorePlayer < 5 && scoreComputer < 5){
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    scoreComputer++;
    res.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}
 function checkForWinner(scorePlayer, scoreComputer){
  computerScoreResult.innerHTML = `${scoreComputer}`;
  playerScoreResult.innerHTML = ` ${scorePlayer}`;
 console.log(`Player score: ${scorePlayer} Computer score: ${scoreComputer} `);
 if(scorePlayer >= 5){
  console.log("You Win the game!!!");
  res.innerHTML = null;
  wRes.innerHTML = "You Win the game!!!";
  lRes.innerHTML = null;
  return "You Win the game!!!!"
 }
 else if(scoreComputer >= 5){
  console.log("You Lost the game)");
  res.innerHTML = null;
  lRes.innerHTML = "You Lost the game)";
  wRes.innerHTML = null;
  return "You Lost the game)"
 }
 }

//old js code

/* const option = ["rock", "paper", "scissors"];

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

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!"
  } 
  else if(result == "Player"){
    return `You Win! ${playerSelection} beats ${computerSelection} `
  } 
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } 

}
function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
     const choise = prompt("Rock Paper Scissors");
     if(choise == null){
       continue;
     }
     const choiseInLower = choise.toLowerCase();
     if( option.includes(choiseInLower)){
       validatedInput == true;
       return choise.toLowerCase();
     }
  }
}

function game(){
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!"); 
  for(let i = 0; i < 5; i++) {
   const playerSelection = getPlayerChoice();
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   console.log("**********")
   if (checkWinner(playerSelection, computerSelection) == "Player"){
    scorePlayer++;
  }
  else if(checkWinner(playerSelection, computerSelection) == "Computer"){
     scoreComputer++;
  }
}
console.log("Game over!");
  if(scorePlayer > scoreComputer){
    console.log("Player was the winner!");
  }
  else if(scorePlayer < scoreComputer){
    console.log("Computer was the winner!");
  }
  else{
    console.log("We have a tie")
  }
}
game(); */


/*const rockBtn = document.querySelector('#rock')
 const paperBtn = document.querySelector('#paper')
 const scissorsBtn = document.querySelector('#scissors')
 function getPlayerChoice(clicked_id){
  const choise = clicked_id;
  alert(clicked_id);
  
}*/
//onClick="getPlayerChoice(this.id); getComputerChoice();  playRound()"