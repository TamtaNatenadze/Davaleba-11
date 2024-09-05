function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "tie";
    } 
  if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      return "winner";
    } else if (computerChoice === "Paper") {
      return "lose";
    }
  }
  if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      return "winner";
    } else if (computerChoice === "Scissors") {
      return "lose";
    }
  }
  if (userChoice === "Scissors") {
    if (computerChoice === "Paper") {
      return "winner";
    } else if (computerChoice === "Rock") {
      return "lose";
    }
  }
  return "Invalid choice. Please enter Rock, Paper, or Scissors.";
}

function playGame() {
  let userChoice = prompt("Enter Rock, Paper, or Scissors:");
  userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  const computerChoice = getComputerChoice();
  alert("Computer chose: " + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
}
playGame();
