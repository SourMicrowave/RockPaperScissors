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
  return result
  //rock beats scissors
  //scissors beat paper
  //paper beats rock
}

playRound()