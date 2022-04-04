const RPS = ['rock', 'paper', 'scissors'];
let win = 0
let tie = 0
let loose = 0

function computerPlay() {
  return RPS[Math.floor(Math.random()*RPS.length)];
}

function roundResult(playerSelection, computerSelection) {

  if(playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      return [2, "It's a tie of Rocks."];
    } else if(computerSelection == 'paper') {
      return [0, "You loose! Paper beats Rock."];
    }
    else {
      return [1, "You win! Rock beats Scissors."];
    }
  } else if(playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      return [2, "It's a tie of Papers."];
    } else if(computerSelection == 'rock') {
      return [1, "You win! Paper beats Rock."];
    } else {
      return [0, "You loose. Scissors beats Paper."];
    }
  } else {
    if(computerSelection == 'scissors') {
      return [2, "It's a tie of Scissors."];
    } else if(computerSelection == 'rock') {
      return [0, "You loose! Rock beats Scissors."];
    } else {
      return [1, "You win! Scissors beats Paper."];
    }
  }
}

function updateScore(result) {
  if (result == 0) {
    loose += 1;
  } else if (result == 1) {
    win += 1;
  } else if (result == 2) {
    tie += 1;
  }
}

function updateScoreScreen() {
  let winDisplay = document.querySelector("#win");
  let tieDisplay = document.querySelector("#tie");
  let looseDisplay = document.querySelector("#loose");

  winDisplay.textContent = win;
  tieDisplay.textContent = tie;
  looseDisplay.textContent = loose; 
}

function updateScoreLog(text) {
  let scoreLog = document.querySelector("#scoreLog");
  let para = document.createElement("p");
  let score = document.createTextNode(text);
  para.appendChild(score);
  scoreLog.insertBefore(para, scoreLog.firstChild);
}

function checkEndGame() {
  if (win == 5) {
    updateScoreLog("CONGRATZ, YOU WON!!!");
  } else if (loose == 5) {
    updateScoreLog("BETTER LUCK NEXT TIME...");
  }

  if (win === 5 || loose === 5) {
    for (const move of RPS) {
      var old_element = document.querySelector(`#${move}`);
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
    }
  }
}

function playRound(playerSelection, computerSelection) {
  let rr = roundResult(playerSelection, computerSelection);
  updateScore(rr[0]);
  updateScoreScreen();
  updateScoreLog(rr[1]);
  checkEndGame();
}

for (const move of RPS) {
  let button = document.querySelector(`#${move}`);
  button.addEventListener("click", () => {
    playRound(move, computerPlay());
    console.log(win, tie, loose);
  });
}
