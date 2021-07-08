const readline = require('readline-sync');
const board = [];
const X_MARK = 'x';
const O_MARK = 'o';
const EMPTY_MARK = " ";
const NUMBER_OF_SQUARES = 9;
const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
  [0, 4, 8], [2, 4, 6]]; //diagonal

function prompt(string) {
  console.log(`${string}`);
}

function initializeBoard() {
  for (let space = 0; space < NUMBER_OF_SQUARES; space++) {
    board[space] = EMPTY_MARK;
  }
}

function userResponse() {
  readline.question('\nPress "enter" to continue..');
  console.clear();
}

function displayPlayer(userPlayer) {
  prompt(`You are player "${userPlayer}"`);
  prompt('Player "x" goes first.');
  userResponse();
}
function getRandomUserPlayer() {
  let player = [X_MARK, O_MARK][Math.floor(Math.random() * 2)];
  return player;
}

function printCurrentBoard() {
  prompt("-Current-   --Move---");
  prompt("--Board--   -Options-");
  prompt(`${board[0]} | ${board[1]} | ${board[2]}   1 | 2 | 3`);
  prompt("---------   ---------");
  prompt(`${board[3]} | ${board[4]} | ${board[5]}   4 | 5 | 6`);
  prompt("---------   ---------");
  prompt(`${board[6]} | ${board[7]} | ${board[8]}   7 | 8 | 9`);
  prompt("");
}

function getMoveIndex(userPlayer, cpuPlayer, currentPlayer) {
  if (userPlayer === currentPlayer) {
    return getMoveIndexFromUser(userPlayer, cpuPlayer);
  } else {
    return getMoveIndexFromComputer(currentPlayer, userPlayer);
  }
}

function getMoveIndexFromUser(user, cpu) {
  while (true) {
    console.clear();
    prompt(` PLAYER: ${user.toUpperCase()} | CPU: ${cpu.toUpperCase()}`);
    prompt("---------------------\n");
    printCurrentBoard();
    prompt('Select a move: 1-9');
    let userMoveSelection = readline.question();
    console.clear();
    let moveIndex = Number(userMoveSelection) - 1;
    if (isValidMove(moveIndex)) {
      return moveIndex;
    }
    prompt(`${userMoveSelection} is not a valid Selection`);
    userResponse();
  }
}

function getMoveIndexFromComputer(cpuMark, humanMark) {
  while (true) {
    let computerWinIndex = twoInARowIndex(cpuMark);
    if (computerWinIndex !== null) return computerWinIndex;

    let humanWinIndex = twoInARowIndex(humanMark);
    if (humanWinIndex !== null) return humanWinIndex;

    if (board[4] === ' ') return 4;

    let randomMoveIndex = Math.floor(board.length * Math.random());
    if (isValidMove(randomMoveIndex)) {
      return randomMoveIndex;
    }
  }
}

function twoInARowIndex(playerMark) {
  let match = null;
  WIN_LINES.forEach((winLine) => {
    let emptySpace = null;
    let playerMarkCounter = 0;
    winLine.forEach(space => {
      if (board[space] === playerMark) playerMarkCounter += 1;
      if (board[space] === EMPTY_MARK) emptySpace = space;
      if ((emptySpace !== null) && (playerMarkCounter === 2)) {
        match = emptySpace;
      }
    });
  });
  return match;
}

function isValidMove(moveIndex) {
  return !!(moveIndex >= 0 && moveIndex <= 8 && board[moveIndex] === EMPTY_MARK);
}

function isWinState() {
  let xWins = WIN_LINES.map(winLine => {
    return winLine.every(moveIndex => board[moveIndex] === X_MARK);
  }).includes(true);
  let oWins = WIN_LINES.map(winLine => {
    return winLine.every(moveIndex => board[moveIndex] === O_MARK);
  }).includes(true);
  return !!(xWins || oWins);
}

function isBoardFull() {
  return board.every(space => {
    return (space === X_MARK || space === O_MARK);
  });
}

function declareWinner(currentPlayer) {
  console.clear();
  prompt(`${currentPlayer} Wins!`);
  prompt('');
  printCurrentBoard();
  userResponse();
}

function declareDraw() {
  console.clear();
  prompt(`It's a Draw!`);
  printCurrentBoard();
  userResponse();
}

function doesUserWantToPlayAgain() {
  while (true) {
    console.clear();
    prompt("Would you like to play again? (y/n)");
    let response = readline.question();
    if (['y', 'yes'].includes(response.toLowerCase())) return true;
    if (['n', 'no'].includes(response.toLowerCase())) return false;
    console.clear();
    prompt(`${response} is not a valid response.`);
    userResponse();
  }
}

console.clear();

prompt('Welcome to Tic Tac Toe!\n');

let playAgain = true;

while (playAgain) {

  initializeBoard();

  let userPlayer = getRandomUserPlayer();
  let cpuPlayer = userPlayer === X_MARK ? O_MARK : X_MARK;

  displayPlayer(userPlayer);

  let currentPlayer = X_MARK;
  let moveIndex;

  while (true) {
    printCurrentBoard();
    prompt(`It is ${currentPlayer}'s turn`);

    moveIndex = getMoveIndex(userPlayer, cpuPlayer, currentPlayer);
    console.clear();

    board[moveIndex] = currentPlayer;

    if (isWinState()) {
      declareWinner(currentPlayer);
      break;
    } else if (isBoardFull()) {
      declareDraw();
      break;
    } else {
      currentPlayer = (currentPlayer === X_MARK) ? O_MARK : X_MARK;
    }
  }

  playAgain = doesUserWantToPlayAgain();
  console.clear();
  if (!playAgain) prompt("Thank you for playing. Goodbye!");
}