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

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(choice, computerChoice) {

  if (playerWins(choice, computerChoice)) {
    return 'human';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

let humanWinCount = 0;
let computerWinCount = 0;
let isGrandWinner = false;

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
prompt(`Best of Five: first to ${WIN_SCORE} wins is the Grand Winner!`);
prompt('ProTip: Use first letter for quick selection (use "k" for Spock)');
console.log("");

while (true) {

  prompt(`Choose one: ${CHOICES.key.join(', ')}`);
  let choice = readline.question();
// Fixed Logic
  while (!CHOICES.keys().includes(choice) && 
         !CHOICES..includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  console.log("");

  if (!VALID_CHOICES.includes(choice)) {
    choice = VALID_CHOICES[VALID_SHORTCUTS.indexOf(choice)];
  }

  let randomIndex = Math.floor(Math.random() * CHOICES.keys().length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  let winner = determineWinner(choice, computerChoice);

  if (winner === 'computer') {
    prompt('Computer Wins!');
    computerWinCount += 1;
  } else if (winner === 'human') {
    prompt('You Win!');
    humanWinCount += 1;
  } else {
    prompt("It's a tie!");
  }

  prompt(`Human: ${humanWinCount}, Computer: ${computerWinCount}`);

  if (humanWinCount === WIN_SCORE) {
    prompt("You are the Grand Winner!");
    isGrandWinner = true;
  } else if (computerWinCount === WIN_SCORE) {
    prompt("Computer is the Grand Winner");
    isGrandWinner = true;
  }

  if (isGrandWinner) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer !== 'n' && answer !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer !== 'y') break;

    humanWinCount = 0;
    computerWinCount = 0;
    isGrandWinner = false;
  }
  
  //console.clear();
}
