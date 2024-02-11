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



//event listener when a button is pressed
//assign to userChoice?
//call playRound()





function playRound(userChoice) {
  let result
  let roundWinner
  let computer = getComputerChoice();
  let user = userChoice;
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




const btns = document.querySelectorAll('.button');
const uScore = document.querySelector('#uScore');
const roundNum = document.querySelector('.roundCounter');
const screen = document.querySelector('.scoreTitle')
const message = document.querySelector('.message')
let scoreArray = [0, 0]
let roundCount = 0;
let lossArray = ["Oof you lost that round", "What a terrible round for you", "Oh dear..."]
let winArray = ["You won that round, you want a sticker?", "Damn that was hot", "#Whoop"]


btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let userChoice = btn.id;


    if (scoreArray[0] === 5 || scoreArray[1] === 5) { //stops anything happening after a max score of 5
      console.log("end2")
      message.textContent = "Stop Touching Me!"
    }
    else {
      let winnerIndex = playRound(userChoice)
      
      //update round count
      roundCount += 1;
      roundNum.textContent = `Round ${roundCount}`

      if (isNaN(winnerIndex)) { //checks if tie
        console.log("tie");
        message.textContent = "Its a tie!"
      }
      else {  //if not a tie, alters the score...
        scoreArray[winnerIndex] += 1;
        
        if (winnerIndex === 0) {  //if computer wins
          //IN FUTURE HAVE A FEW POSSIBLE MESSAGES THAT ARE RANDOMLY SELECTED
          message.textContent = lossArray[Math.floor(Math.random()*3)]
        }
        else {  //if user wins
          message.textContent = "You won that round, you want a sticker?"
        }

        uScore.textContent = scoreArray[1]  //the scoreArray is the wrong way round [computer, user], so swap it here
        cScore.textContent = scoreArray[0]
        
        console.log(scoreArray)

        //check if user won overall game
        if (scoreArray[1] === 5) {
          console.log("end")
    
          //Fill screen with Game Over or You Win!  .screen
          screen.textContent = `You Win!`
        
        }
        else if (scoreArray[0] === 5) {
          screen.textContent = 'You Lose :('
        }
      }
    }

  })
})



