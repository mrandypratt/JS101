const readline = require('readline-sync');

const WIN_SCORE = 3; 
const CHOICES = {
  'rock': { 
    shorthand: 'r', 
    beats: ['scissors', 'lizard']
  },
  'paper': { 
    shorthand: 'p', 
    beats: ['rock', 'spock']
  },
  'scissors': { 
    shorthand: 's', 
    beats: ['paper', 'lizard']
  },
  'lizard': { 
    shorthand: 'l', 
    beats: ['spock', 'paper']
  },
  'spock': { 
    shorthand: 'k', 
    beats: ['scissors', 'rock']
  }
}

const LONGHAND_OPTIONS = Object.keys(CHOICES);
const SHORTHAND_OPTIONS = [];
Object.values(CHOICES).forEach(object => SHORTHAND_OPTIONS.push(object.shorthand));

let humanWinCount = 0;
let computerWinCount = 0;
let isGrandWinner = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  while (true) {
    prompt(`Choose one: ${Object.keys(CHOICES).join(', ')}`);
    let playerChoice = readline.question();
    console.clear();
    if (SHORTHAND_OPTIONS.includes(playerChoice)) {
      playerChoice = LONGHAND_OPTIONS[SHORTHAND_OPTIONS.indexOf(playerChoice)];
    }
    if (LONGHAND_OPTIONS.includes(playerChoice)) {
      return playerChoice; 
    } 
    prompt(`"${playerChoice}" is not a valid choice`);
  }
}

function declareRoundWinner(playerChoice, computerChoice) {
  if (CHOICES[playerChoice].beats.includes(computerChoice)) {
    prompt('You Win!');
    return 'human';
  } else if (playerChoice === computerChoice) {
    prompt("It's a Tie!");
    return 'tie';
  } else {
    prompt('Computer Wins!');
    return 'computer';
  }
}

function declareGrandWinner(humanWinCount, computerWinCount) {
  if (humanWinCount === WIN_SCORE) {
    prompt("You are the Grand Winner!");
    return true;
  } else if (computerWinCount === WIN_SCORE) {
    prompt("Computer is the Grand Winner");
    return true;
  }
}

function askToPlayAgain() {


    do {
      prompt('Do you want to play again (y/n)?');
      let playAgain = readline.question().toLowerCase();
      if (playAgain === 'y') return true;
      if (playAgain === 'n') return false;
      prompt('Please enter "y" or "n".');
      playAgain = readline.question().toLowerCase();
    } while (true)
}

function resetScore() {
  humanWinCount = 0;
  computerWinCount = 0;
  isGrandWinner = false;
  console.clear();
}

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
prompt(`Best of Five: first to ${WIN_SCORE} wins will be declared the Grand Winner!`);
prompt('ProTip: Use first letter for quick selection (use "k" for Spock)');
console.log("");

while (true) {
  
  let playerChoice = getPlayerChoice();

  let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
  let computerChoice = LONGHAND_OPTIONS[randomIndex];
  
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  let roundWinner = declareRoundWinner(playerChoice, computerChoice);
  
  if (roundWinner === 'computer') {
    computerWinCount += 1;
  } else if (roundWinner === 'human') {
    humanWinCount += 1;
  } 

  prompt(`Human: ${humanWinCount}, Computer: ${computerWinCount}`);
  console.log("");
  
  isGrandWinner = declareGrandWinner(humanWinCount, computerWinCount);
  
  if (isGrandWinner) {
    let playAgain = askToPlayAgain();
    if (!playAgain) break;
    if (playAgain) resetScore();
  }
}