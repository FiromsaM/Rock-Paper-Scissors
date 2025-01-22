// Get computer choice, we need to have it return string values of either "rock", "paper", "scissors"
// We need computer to choice a random number between 1-3 with Math.random
// Compare the random number generated with the computer
// Assign the strings of "rock", "paper", & 'scissors' the values 1,2,3
// Return the string of the computer choice

function getComputerChoice() {
  let cpu = Math.floor(Math.random() * 3) + 1
  let rock = 1
  let paper = 2
  let scissors = 3
  if (cpu === rock) {
    return 'rock'
  } else if (cpu === paper) {
    return 'paper'
  } else if (cpu === scissors) {
    return 'scissors'
  }
}

function correctInput(input) {
  if (input === 'rock' || input === 'paper' || input === 'scissors') {
    return input
  } else {
    return 'Invalid Entry'
  }
}

//Get user input and store it in a variable
function getHumanChoice() {
  let user = prompt('Choice rock, paper, or scissors').toLowerCase()
  return correctInput(user)
}

// Create a function that takes the computer and human choices as parameters
// Create conditionals that determines the win of the round
// all the scenerio that human can win
// user === 'rock' && cpu === "scissors" ||
// user === 'paper' && cpu === "rock" ||
// user === 'scissors' && cpu === 'paper'
// Alert the winner

// function playRound(user, cpu) {
//   if (user === 'Invalid Entry') {
//     return console.log('User has entered an Invalid Entry')
//   }

//   if (
//     (user === 'rock' && cpu === 'scissors') ||
//     (user === 'paper' && cpu === 'rock') ||
//     (user === 'scissors' && cpu === 'paper')
//   ) {
//     console.log(`YOU WIN!!!! ${user} beat ${cpu}`)
//   } else if (
//     (cpu === 'rock' && user === 'scissors') ||
//     (cpu === 'paper' && suer === 'rock') ||
//     (cpu === 'scissors' && user === 'paper')
//   ) {
//     console.log(`YOU LOSE!!!! ${cpu} beat ${user}`)
//   } else {
//     console.log(`It's a tie..... You both selected ${user}`)
//   }
// }

// playRound(humanChoice, computerChoice)

//create a playGame that runs 5 times
//Keep track of the round winners by incrementing the user & computer winner of each round
//create variable for score for human and computer
// While game is less than 5
// run playRound and keep track of the winner
//Compare the score and return the winner

function playRound(user, cpu) {
  if (user === 'Invalid Entry') {
    return console.log('User has entered an Invalid Entry')
  }

  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    console.log(`YOU WIN!!!! ${user} beat ${cpu}`)

    return 'user'
  } else if (
    (cpu === 'rock' && user === 'scissors') ||
    (cpu === 'paper' && user === 'rock') ||
    (cpu === 'scissors' && user === 'paper')
  ) {
    console.log(`YOU LOSE!!!! ${cpu} beat ${user}`)

    return 'cpu'
  } else {
    console.log(`It's a tie..... You both selected ${user}`)
  }
}

function playGame() {
  let humanScore = 0
  let computerScore = 0
  let game = 1
  let round = ''
  console.log(game)
  while (game <= 5) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    round = playRound(humanChoice, computerChoice)
    console.log(round)
    if (round === 'user') {
      humanScore += 1
    } else if (round === 'cpu') {
      computerScore += 1
    }
    game++
  }

  if (humanScore > computerScore) {
    console.log(`You won!!! ${humanScore} : ${computerScore}`)
  } else if (computerScore > humanScore) {
    console.log(`You lost!!! ${computerScore} : ${humanScore}`)
  }
}

// let humanChoice = getHumanChoice()
// let computerChoice = getComputerChoice()
// playRound(humanChoice, computerChoice)
playGame()
