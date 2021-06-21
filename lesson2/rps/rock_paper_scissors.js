const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_SHORTCUTS = ['r', 'p', 's', 'l', 'k'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock');
}

function determineWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

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
prompt("Best of Five: first to three wins is the Grand Winner!");
prompt('ProTip: Use first letter for quick selection (use "k" for Spock)');
console.log("");

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!(VALID_CHOICES.includes(choice) ||
    VALID_SHORTCUTS.includes(choice[0]))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  console.log("");

  if (!VALID_CHOICES.includes(choice)) {
    choice = VALID_CHOICES[VALID_SHORTCUTS.indexOf(choice)];
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

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

  if (humanWinCount === 3) {
    prompt("You are the Grand Winner!");
    isGrandWinner = true;
  } else if (computerWinCount === 3) {
    prompt("Computer is the Grand Winner");
    isGrandWinner = true;
  }

  if (isGrandWinner) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;

    humanWinCount = 0;
    computerWinCount = 0;
    isGrandWinner = false;
  }
}