function rockPaperScissors() {
  let player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase();
  let player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase();

  if (player1 === player2) {
    alert("It's a tie!");
  } else if (player1 === "rock") {
    if (player2 === "scissors") {
      alert("Player 1 wins!");
    } else {
      alert("Player 2 wins!");
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      alert("Player 1 wins!");
    } else {
      alert("Player 2 wins!");
    }
  } else if (player1 === "scissors") {
    if (player2 === "paper") {
      alert("Player 1 wins!");
    } else {
      alert("Player 2 wins!");
    }
  } else {
    alert("Invalid input! Please enter rock, paper, or scissors.");
  }
}

rockPaperScissors();
