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
     const choise = rock;
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
game();