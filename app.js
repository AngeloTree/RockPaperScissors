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
    console.log("Tie");
  } else if (
    (computerPick == "rock" && playerPick == "scissors") ||
    (computerPick == "scissors" && playerPick == "paper") ||
    (computerPick == "paper" && playerPick == "rock")
  ) {
    console.log(
      `Computer wins! With its ${computerPick} against your ${playerPick}`
    );
  } else if (
    console.log(
      `You win! With your ${playerPick} against the computer's ${computerPick}`
    )
  );
};

gamePlay();
