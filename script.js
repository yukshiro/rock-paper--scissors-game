"use strict";

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const choice = Math.trunc(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

console.log(getComputerChoice());

const getHumanChoice = function () {
  const choice = prompt("Enter rock, paper or scissors: ");
  return choice.toLowerCase();
};

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const playGame = function (n) {
  for (let i = 0; i < n; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final score you - ${humanScore} \n computer - ${computerScore}`);
  humanScore = 0;
  computerScore = 0;
};

playGame(5);
