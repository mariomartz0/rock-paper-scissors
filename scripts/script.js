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

playRound();

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

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = getResult(humanSelection, computerSelection);
  let message;

  if (result === "WIN") {
    message = `You win! ${humanSelection} beats ${computerSelection}.`;
  } else if (result === "LOSE") {
    message = `You lose! ${computerSelection} beats ${humanSelection}.`;
  } else if (result === "DRAW") {
    message = `It's a draw! You both chose ${humanSelection}.`;
  } else {
    message = "Something went wrong!";
  }

  console.log(message);
}

// Function to evaluate result depending on human/computer choice
function getResult(humanChoice, computerChoice) {
  let result;
  switch (humanChoice) {
    case "ROCK":
      /*
        Win Conditions: "Rock"
          - Opponent chooses "Scissors"
        Lose Conditions: "Rock"
          - Opponent chooses "Paper"
        Draw Conditions: "Rock"
          - Opponent chooses "Rock"
      */
      switch (computerChoice) {
        case "SCISSORS":
          result = "WIN";
          break;
        case "PAPER":
          result = "LOSE";
          break;
        case "ROCK":
          result = "DRAW";
          break;
      }
      break;
    case "PAPER":
      /*
        Win Conditions: "Paper"
          - Opponent chooses "Rock"
        Lose Conditions: "Paper"
          - Opponent chooses "Scissors"
        Draw Conditions: "Paper"
          - Opponent chooses "Paper"
      */
      switch (computerChoice) {
        case "ROCK":
          result = "WIN";
          break;
        case "SCISSORS":
          result = "LOSE";
          break;
        case "PAPER":
          result = "DRAW";
          break;
      }
      break;
    case "SCISSORS":
      /*
        Win Conditions: "Scissors"
          - Opponent chooses "Paper"
        Lose Conditions: "Scissors"
          - Opponent chooses "Rock"
        Draw Conditions: "Scissors"
          - Opponent chooses "Scissors"
      */
      switch (computerChoice) {
        case "PAPER":
          result = "WIN";
          break;
        case "ROCK":
          result = "LOSE";
          break;
        case "SCISSORS":
          result = "DRAW";
          break;
      }
      break;
  }
  return result;
}
