const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
const score = document.querySelector('#score')
const results = document.querySelector('#results')
const gameCount = document.querySelector('#gameCount')

let humanScore = 0
let computerScore = 0
let game = 0

results.textContent = `User Score: ${humanScore}, Computer Score: ${computerScore}`

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

// Create a function that takes the computer and human choices as parameters
// Create conditionals that determines the win of the round
// all the scenerio that human can win
// user === 'rock' && cpu === "scissors" ||
// user === 'paper' && cpu === "rock" ||
// user === 'scissors' && cpu === 'paper'
// Alert the winner

function playRound(user, cpu) {
  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    score.textContent = `YOU WIN!!!! ${user} beat ${cpu}`

    return 'win'
  } else if (
    (cpu === 'rock' && user === 'scissors') ||
    (cpu === 'paper' && user === 'rock') ||
    (cpu === 'scissors' && user === 'paper')
  ) {
    score.textContent = `YOU LOSE!!!! ${cpu} beat ${user}`

    return 'lose'
  } else {
    score.textContent = `It's a tie..... You both selected ${user}`
  }
}

function playGame(user, cpu) {
  if (game == 5) {
    resetGame()
  }
  let round = playRound(user, cpu)
  if (round === 'win') {
    humanScore += 1
  } else if (round === 'lose') {
    computerScore += 1
  }

  results.textContent = `User Score: ${humanScore}, Computer Score: ${computerScore}`
  game++

  if (game) {
    gameCount.textContent = `Game: ${game}`
  }
  if (game === 5) {
    if (humanScore > computerScore) {
      results.textContent = `You won!!! ${humanScore} : ${computerScore}`
    } else if (computerScore > humanScore) {
      results.textContent = `You lost!!! ${computerScore} : ${humanScore}`
    }
  }
}

function resetGame() {
  humanScore = 0
  computerScore = 0
  game = 0
  score.textContent = ''
  results.textContent = ''
  results.textContent = `User Score: ${humanScore}, Computer Score: ${computerScore}`
  gameCount.textContent = `Game: `
}

rock.addEventListener('click', (e) => {
  e.preventDefault
  playGame('rock', getComputerChoice())
})

paper.addEventListener('click', (e) => {
  e.preventDefault

  playGame('paper', getComputerChoice())
})

scissors.addEventListener('click', (e) => {
  e.preventDefault

  playGame('scissors', getComputerChoice())
})

reset.addEventListener('click', resetGame)
