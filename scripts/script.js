/*
  The Problem:
    Create a game of Rock Paper Scissors that runs entirely
    through the console. The human is prompted to make a choice
    between "Rock", "Paper", and "Scissors" and then the computer
    will randomly make a choice out of the 3 options as well. Once
    the human and the computer have both made a choice, their
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

// Keep track of the human score and computer score so it can be displayed
let humanScore = 0;
let computerScore = 0;
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
// Explain rules to human
console.log('Choose one of the following: "rock", "paper", "scissors" ');

// Get human choice
function getHumanChoice() {
  const humanChoice = prompt("Enter your choice:", "").toUpperCase();
  console.log(`Human Choice: ${humanChoice}`);
  return humanChoice;
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
