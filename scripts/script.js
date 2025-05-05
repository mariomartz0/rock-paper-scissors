/*
  Author: Mario Martinez
  Date: 2025-05-05 
*/

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

playGame();

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
  const result = getResult(humanChoice, computerChoice);
  let message;

  // Change message based on result & increment winners score
  if (result === "WIN") {
    message = `You win! ${humanChoice} beats ${computerChoice}.`;
    incrementScore("human");
  } else if (result === "LOSE") {
    message = `You lose! ${computerChoice} beats ${humanChoice}.`;
    incrementScore("computer");
  } else if (result === "DRAW") {
    message = `It's a draw! You both chose ${humanChoice}.`;
  } else {
    message = "Something went wrong! You entered an invalid choice.";
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

// Increments the score of the winner
function incrementScore(winner) {
  // Identifies which score to increment based on string passed to function
  switch (winner) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
}

// Function to make the game play on for 5 rounds
function playGame() {
  // Max number of rounds
  const MAX_ROUNDS = 5;
  // For loop to play 5 rounds sequentially
  for (let round = 1; round <= MAX_ROUNDS; round++) {
    console.log("****************************************************");
    // Announce current round
    console.log(`Round ${round}:`);
    // Announce current score
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    // Explain rules to human
    console.log('Choose one of the following: "rock", "paper", "scissors" ');

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("****************************************************");

  //Once 5 rounds are completed, evaluate winner and announce it
  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("It's a draw!");
  }

  console.log("FINAL SCORE:");
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
