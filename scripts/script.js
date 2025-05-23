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

function displayResults(playerChoice, computerChoice, message, result) {
  const resultsDiv = document.querySelector(".results");
  while (resultsDiv.firstChild) {
    resultsDiv.removeChild(resultsDiv.firstChild);
  }

  const resultsH2 = document.createElement("h2");
  resultsH2.textContent = "Results";
  resultsDiv.appendChild(resultsH2);

  const resultsH3 = document.createElement("h3");
  resultsH3.textContent = message;
  if (result === "WIN") {
    resultsH3.classList.add("win");
  } else if (result === "LOSE") {
    resultsH3.classList.add("lose");
  }
  resultsDiv.appendChild(resultsH3);

  const matchupDiv = document.createElement("div");
  matchupDiv.classList.add("matchup");
  resultsDiv.appendChild(matchupDiv);

  const playerChoiceDiv = document.createElement("div");
  playerChoiceDiv.classList.add("player-choice");
  matchupDiv.appendChild(playerChoiceDiv);

  const playerH4 = document.createElement("h4");
  playerH4.textContent = "Player";
  playerChoiceDiv.appendChild(playerH4);

  const playerChoicePara = document.createElement("p");
  playerChoicePara.textContent = playerChoice;
  playerChoiceDiv.appendChild(playerChoicePara);

  const playerScorePara = document.createElement("p");
  playerScorePara.textContent = `Score: ${humanScore}`;
  playerChoiceDiv.appendChild(playerScorePara);

  const vsDiv = document.createElement("div");
  vsDiv.classList.add("vs");
  matchupDiv.appendChild(vsDiv);

  const vsPara = document.createElement("p");
  vsPara.textContent = "VS";
  vsDiv.appendChild(vsPara);

  const computerChoiceDiv = document.createElement("div");
  computerChoiceDiv.classList.add("computer-choice");
  matchupDiv.appendChild(computerChoiceDiv);

  const computerH4 = document.createElement("h4");
  computerH4.textContent = "Computer";
  computerChoiceDiv.appendChild(computerH4);

  const computerChoicePara = document.createElement("p");
  computerChoicePara.textContent = computerChoice;
  computerChoiceDiv.appendChild(computerChoicePara);

  const computerScorePara = document.createElement("p");
  computerScorePara.textContent = `Score: ${computerScore}`;
  computerChoiceDiv.appendChild(computerScorePara);
}

// Using event delegation to avoid adding an event listener to every button
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.value) {
    case "ROCK":
      playRound(getHumanChoice(target.value), getComputerChoice());
      break;
    case "PAPER":
      playRound(getHumanChoice(target.value), getComputerChoice());
      break;
    case "SCISSORS":
      playRound(getHumanChoice(target.value), getComputerChoice());
      break;
  }
});

// Get human choice
function getHumanChoice(choice) {
  const humanChoice = choice;
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

  displayResults(humanChoice, computerChoice, message, result);
  checkForWinner();
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

function checkForWinner() {
  if (humanScore >= 5) {
    return announceOverallWinner("PLAYER");
  } else if (computerScore >= 5) {
    return announceOverallWinner("COMPUTER");
  }
}

function announceOverallWinner(winner) {
  const container = document.querySelector(".container");

  const buttons = document.querySelector(".buttons");
  container.removeChild(buttons);

  const overallWinnerH2 = document.createElement("h2");
  overallWinnerH2.textContent = `${winner} WINS! They were the first to reach a score of 5.`;
  container.appendChild(overallWinnerH2);

  const overallWinnerPara = document.createElement("p");
  overallWinnerPara.textContent = "Please refresh the page to play again.";
  container.appendChild(overallWinnerPara);
}
