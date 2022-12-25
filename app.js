const gameChoices = ["Rock", "Paper", "Scissors"];

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
