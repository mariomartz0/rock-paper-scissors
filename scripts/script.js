/*
  The Problem:
    Create a game of Rock Paper Scissors that runs entirely
    through the console. The player is prompted to make a choice
    between "Rock", "Paper", and "Scissors" and then the computer
    will randomly make a choice out of the 3 options as well. Once
    the player and the computer have both made a choice, their
    choices will be compared and based on the game logic, the winner
    will be returned/announced. 
    
  The Game Logic:
    Win Conditions: "Rock"
      - Opponent chooses "Scissors"
    Lose Conditions: "Rock"
      - Opponent chooses "Paper"
    Draw Conditions: "Rock"
      - Opponent chooses "Rock"
    
    Win Conditions: "Paper"
      - Opponent chooses "Rock"
    Lose Conditions: "Paper"
      - Opponent chooses "Scissors"
    Draw Conditions: "Paper"
      - Opponent chooses "Paper"

    Win Conditions: "Scissors"
      - Opponent chooses "Paper"
    Lose Conditions: "Scissors"
      - Opponent chooses "Rock"
    Draw Conditions: "Scissors"
      - Opponent chooses "Scissors"

*/
// Explain rules to player
console.log('Choose one of the following: "rock", "paper", "scissors" ');

// Get player choice
function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice:", "").toUpperCase();
  console.log(`Player Choice: ${playerChoice}`);
  return playerChoice;
}

// Get computer choice
function getComputerChoice() {
  let computerChoice;
  // Choice must be random and only 1 of 3 options
  const option = Math.floor(Math.random() * 3);
  switch (option) {
    case 0:
      computerChoice = "ROCK";
      break;
    case 1:
      computerChoice = "PAPER";
      break;
    case 2:
      computerChoice = "SCISSORS";
      break;
  }
  console.log(`Computer Choice: ${computerChoice}`);
  return computerChoice;
}

getPlayerChoice();
getComputerChoice();
