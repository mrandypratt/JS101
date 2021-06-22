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

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(`Choose one: ${Object.keys(CHOICES).join(', ')}`);
  
  let playerChoice = readline.question();

  while (!LONGHAND_OPTIONS.includes(playerChoice) && 
         !SHORTHAND_OPTIONS.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  } 
  
  if (SHORTHAND_OPTIONS.includes(choice)) {
    choice = LONGHAND_OPTIONS[SHORTHAND_OPTIONS.indexOf(choice)];
  }
  
  return playerChoice;
}

function declareRoundWinner(playerChoice, computerChoice) {
  if (CHOICES[playerChoice].beats.includes(computerChoice)) {
    prompt('You Win!');
    return 'Human';
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
    prompt('Do you want to play again (y/n)?');
  
    let playAgain = readline.question().toLowerCase();
    do {
      if (playAgain = 'y') return true;
      if (playAgain = 'n') return false;
      prompt('Please enter "y" or "n".');
      playAgain = readline.question().toLowerCase();
    } while (true)
}

let humanWinCount = 0;
let computerWinCount = 0;
let isGrandWinner = false;

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
prompt(`Best of Five: first to ${WIN_SCORE} wins will be declared the Grand Winner!`);
prompt('ProTip: Use first letter for quick selection (use "k" for Spock)');
console.log("");

while (true) {
  
  let playerChoice = getPlayerChoice();

  console.clear();

  let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
  let computerChoice = LONGHAND_OPTIONS[randomIndex];
  
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  let winner = declareRoundWinner(playerChoice, computerChoice);
  
  if (winner === 'computer') {
    computerWinCount += 1;
  } else if (winner === 'human') {
    humanWinCount += 1;
  } 

  prompt(`Human: ${humanWinCount}, Computer: ${computerWinCount}`);
  
  isGrandWinner = declareGrandWinner(humanWinCount, computerWinCount);
  
  if (isGrandWinner) {
    let playAgain = askToPlayAgain();
    if (!playAgain) break;
  }

  humanWinCount = 0;
  computerWinCount = 0;
  isGrandWinner = false;
  console.clear();
}
  
}
