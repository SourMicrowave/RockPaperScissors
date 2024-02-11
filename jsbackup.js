//Computer vs User
//Function to get computer choice
//Function to get user choice (must be case insensitive)
//Function to play one round of game (two parameters)
//Will return a string that declares the winner
//MUST ACCOUNT FOR TIES
//Function game() that plays best-of-five and keeps scores

const choiceArray = ["rock", "paper", "scissors"]
 
function getComputerChoice() {
  let choiceNum = Math.floor(Math.random()*3); // randomly choose 0, 1 or 2
  computerChoice = choiceArray[choiceNum];
  //console.log(computerChoice);
  return computerChoice
}

function getUserChoice() {
  let userChoice = prompt("Please enter your choice of rock, paper, or scissors").toLowerCase();  //asks user to enter choice and makes it lowercase
  while (!(userChoice === choiceArray[0] || userChoice === choiceArray[1] || userChoice === choiceArray[2])) {  //checks if choice is valid (by comparing to choice array)
    userChoice = prompt("Invalid input. Please enter your choice of rock, paper, or scissors").toLowerCase(); // if choice is invalid asks for another input
  }
  //console.log(userChoice);
  return userChoice
  
}

function playRound() {
  let result
  let roundWinner
  let computer = getComputerChoice();
  let user = getUserChoice();
  console.log("Computer chose " + computer)

  if (computer === user) {
    result = "Tie";
  }
  else if (user === "rock") {
    if (computer === "paper") {
      result = "Computer wins";
    }
    else {
      result = "User wins";
    }
  }
  else if (user === "paper") {
    if (computer === "scissors") {
      result = "Computer wins";
    }
    else {
      result = "User wins";
    }
  }
  else if (user === "scissors") {
    if (computer === "rock") {
      result = "Computer wins";
    }
    else {
      result = "User wins";
    }
  }
  console.log(result)
  
  //create scores
  if (result === "Computer wins") {
    roundWinner = 0; 
  }
  else if (result === "User wins") {
    roundWinner = 1;
  }
  else {
    roundWinner = NaN //ties don't add to the score
  }
  return roundWinner
}

function game() {
  let scoreArray = [0, 0] //[computerScore, userScore] 
  //while computerScore or userScore is less than 5
  while (scoreArray[0] < 5 || scoreArray[0] < 5) {
    winnerIndex = playRound();
    scoreArray[winnerIndex] += 1;
    console.log(scoreArray);
    if (winnerIndex === 0) {
      alert("Computer won this round, you suck.\nSCORE: Computer: " + scoreArray[0] + " User: " + scoreArray[1]);
    }
    else if (winnerIndex === 1) {
      alert("You won this round.\n SCORE: Computer: " + scoreArray[0] + " User: " + scoreArray[1]);
    }
    else {
      alert("This round was a tie, boring...\n SCORE: Computer " + scoreArray[0] + " User: " + scoreArray[1]);
    }
  } 
  if (scoreArray[0] > scoreArray[1]) {
    alert("Computer won, that's embarrasing")
    return "Computer Wins"
  }
  else if (scoreArray[0] < scoreArray[1]) {
    alert("You won, yay")
    return "User Wins"
  }
  else {
    alert("A tie...")
    return "Tie"
  }
  
}

game()