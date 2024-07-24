let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    Ties: 0,
  };


  updateScoreElement();
  // if(!score){
  //   score = {
  //     wins: 0,
  //     losses:0,
  //     Ties:0
  //   };
  // }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    // scissors

    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You Lose.";
      } else if (computerMove === "Paper") {
        result = "You Win.";
      } else if (computerMove === "Scissors") {
        result = "Tie.";
      }
    }

    // paper
    else if (playerMove === "Paper") {
      if (computerMove === "Paper") {
        result = "Tie.";
      } else if (computerMove === "Scissors") {
        result = "You Lose.";
      } else if (computerMove === "rock") {
        result = "You Win.";
      }

      //  rock
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "Paper") {
        result = "You Lose.";
      } else if (computerMove === "Scissors") {
        result = "You Win.";
      }
    }

    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You Lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.Ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-results').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You<img  class="move-icon" src="${playerMove}-emoji.png" > <img class="move-icon" src="${computerMove}-emoji.png" alt=""> Computer`;
 
//         alert(
//           `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
//  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`
//         );
  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`

  };

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "Scissors";
    }

    return computerMove;
  }