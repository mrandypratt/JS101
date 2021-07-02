const readline = require('readline-sync');
const BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function prompt(string) {
  console.log(`${string}`);
}

function userResponse() {
  let response = readline.question('Press "enter" to continue..');
  console.clear();
  return;
}

function getRandomUserPlayer() {
  let player = ['x', 'o'][Math.floor(Math.random() * 2)];
  return player;
}

function printCurrentBoard() {
  let column = 0;
  for (let row = 1; row <= 3; row++) {
    console.log(`${BOARD[(row * column)]} | ${BOARD[(row * column) + 1]} | ${BOARD[(row * column) + 2]}`);
    if (row <= 2) {
      console.log("---------");
    }
    column++;
  }
}

function printMoveOptions() {
  prompt("Board Options");
  let column = 0;
  for (let row = 1; row <= 3; row++) {
    console.log(`${(row * column) + 1} | ${(row * column) + 2} | ${(row * column) + 3}`);
    if (row <= 2) {
      console.log("---------");
    }
    column++;
  }
}

function getMoveIndex(userPlayer, currentPlayer) {
  if (userPlayer === currentPlayer) {
    return getMoveFromUser();
  } else {
    return getMoveFromComputer();
  }
}

function getMoveFromUser() {
  while (true) {
    console.clear();
    prompt('Select a move ("help" for options)');
    printCurrentBoard();
    let move = readline.question();
    console.clear();

    if (move.toLowerCase() === 'help') {
      printMoveOptions();
      userResponse();
    } else if (isValidMove(Number(move))) {
        return Number(move) - 1;
      }
  }
}

function getMoveFromComputer() {
  while (true) {
    let emptySpaces = BOARD.filter(index => index === ' ');
    let move = Math.floor(emptySpaces.length * Math.random()) + 1;
    if (isValidMove(move)) {
      prompt("Computer's Move")
      return move - 1;
    }
  }
}

function isValidMove(move) {
  if (
    move >= 1 && 
    move <= 9 &&
    BOARD[move - 1] === ' ') {
      return true;
    } else {
      return false;
    }
}

function isWinState() {
  let winStates = [];

  //Horizontal Wins
  winStates.push(winTest[0, 1, 2]);
  winStates.push(winTest[3, 4, 5]);
  winStates.push(winTest[6, 7, 8]);

  //Vertical
  winStates.push(winTest([0, 3, 6]));
  winStates.push(winTest([1, 4, 7]));
  winStates.push(winTest([2, 5, 8]));

  //Diagonal
  winStates.push(winTest([0, 4, 8]));
  winStates.push(winTest([2, 4, 6]));

  return winStates.every(result => result === false);
}

function winTest(winArray) {
  return winArray.every(value => {
    return (value === 'x' || value === 'o');
  });
}

function isBoardFull() {
  return BOARD.every(space => {
    return (space === 'x' || space === 'o');
  });
}

function switchPlayer(currentPlayer) {
  if (currentPlayer === 'x') {
    return 'o';
  } else {
    return 'x';
  }
}

function doesUserWantToPlayAgain() {
  while (true) {
    prompt("Would you like to play again? (y/n)");
    let response = readline.question();
    if (response === 'y') return true;
    if (response === 'n') return false;
    prompt(`${response} is not a valid response.`)
  }
}

console.clear();

prompt('Welcome to Tic Tac Toe!');
userResponse();

printMoveOptions();
userResponse();

let playAgain = true;

while (playAgain) {

  let userPlayer = getRandomUserPlayer();
  prompt(`You are player "${userPlayer}"`);
  userResponse();

  let currentPlayer = 'x';
  let moveIndex;

  while (true) {
    prompt(`It is ${currentPlayer}'s turn`);
    printCurrentBoard()

    moveIndex = getMoveIndex(userPlayer, currentPlayer);
    console.clear();

    BOARD[moveIndex] = currentPlayer;

    if (isWinState()) {
      prompt(`${currentPlayer} Wins!`);      
      break;
    } else if (isBoardFull()) {
      prompt(`It is a Draw!`);
      break;
    } else {
      currentPlayer = switchPlayer(currentPlayer);
    }
  }
  
  playAgain = doesUserWantToPlayAgain();
}
