const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const pTag = document.getElementsByTagName("p")[0];

const gameChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[random];
};

const getPlayerChoice = () => {
  const playerChoice = prompt(
    "Please type rock, paper, or scissors: "
  ).toLowerCase();
  return playerChoice;
};

const gamePlay = () => {
  let computerPick = getComputerChoice();
  let playerPick = getPlayerChoice();
  if (playerPick === computerPick) {
    pTag.textContent = "Tie";
  } else if (
    (computerPick == "rock" && playerPick == "scissors") ||
    (computerPick == "scissors" && playerPick == "paper") ||
    (computerPick == "paper" && playerPick == "rock")
  ) {
    pTag.textContent = `Computer wins! With its ${computerPick} against your ${playerPick}`;
  } else if (
    (pTag.textContent = `You win! With your ${playerPick} against the computer's ${computerPick}`)
  );
};

button.addEventListener("click", gamePlay);
