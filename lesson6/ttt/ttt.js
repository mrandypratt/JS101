const readline = require('readline-sync');
const BOARD = [];
const NUMBER_OF_SQUARES = 9;

function prompt(string) {
  console.log(`${string}`);
}

function userResponse() {
  readline.question('Press "enter" to continue..');
  console.clear();
}

function getRandomUserPlayer() {
  let player = ['x', 'o'][Math.floor(Math.random() * 2)];
  return player;
}

function printCurrentBoard() {
  prompt("-Current-   --Move---");
  prompt("--Board--   -Options-");
  prompt(`${BOARD[0]} | ${BOARD[1]} | ${BOARD[2]}   1 | 2 | 3`);
  prompt("---------   ---------");
  prompt(`${BOARD[3]} | ${BOARD[4]} | ${BOARD[5]}   4 | 5 | 6`);
  prompt("---------   ---------");
  prompt(`${BOARD[6]} | ${BOARD[7]} | ${BOARD[8]}   7 | 8 | 9`);
  prompt("");
}

function getMoveIndex(userPlayer, currentPlayer) {
  if (userPlayer === currentPlayer) {
    return getMoveIndexFromUser();
  } else {
    return getMoveIndexFromComputer();
  }
}

function getMoveIndexFromUser() {
  while (true) {
    console.clear();
    printCurrentBoard();
    prompt('Select a move: 1-9');
    let userMoveSection = readline.question();
    console.clear();
    let moveIndex = Number(userMoveSection) - 1;
    if (isValidMove(moveIndex)) {
      return moveIndex;
    }
  }
}

function getMoveIndexFromComputer() {
  while (true) {
    let moveIndex = Math.floor(BOARD.length * Math.random());
    if (isValidMove(moveIndex)) {
      return moveIndex;
    }
  }
}

function isValidMove(moveIndex) {
  if (
    moveIndex >= 0 &&
    moveIndex <= 8 &&
    BOARD[moveIndex] === ' ') {
    return true;
  } else {
    return false;
  }
}

function isWinState() {
  let winStates = [];

  //Horizontal Wins
  winStates.push(winTest([0, 1, 2]));
  winStates.push(winTest([3, 4, 5]));
  winStates.push(winTest([6, 7, 8]));

  //Vertical
  winStates.push(winTest([0, 3, 6]));
  winStates.push(winTest([1, 4, 7]));
  winStates.push(winTest([2, 5, 8]));

  //Diagonal
  winStates.push(winTest([0, 4, 8]));
  winStates.push(winTest([2, 4, 6]));

  return winStates.includes(true);
}

function winTest(winArray) {
  let xWins = winArray.every(moveIndex => (BOARD[moveIndex] === 'x'));
  let oWins = winArray.every(moveIndex => (BOARD[moveIndex] === 'o'));
  if (xWins || oWins) {
    return true;
  } else {
    return false;
  }
}

function isBoardFull() {
  return BOARD.every(space => {
    return (space === 'x' || space === 'o');
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
    if (response === 'y') return true;
    if (response === 'n') return false;
    prompt(`${response} is not a valid response.`);
    userResponse();
  }
}

console.clear();

prompt('Welcome to Tic Tac Toe!');
prompt('');

let playAgain = true;

while (playAgain) {

  for (let space = 0; space < NUMBER_OF_SQUARES; space++) {
    BOARD[space] = " ";
  }

  let userPlayer = getRandomUserPlayer();
  prompt(`You are player "${userPlayer}"`);
  prompt('Player "x" goes first.');
  prompt("");
  userResponse();

  let currentPlayer = 'x';
  let moveIndex;

  while (true) {
    printCurrentBoard();
    prompt(`It is ${currentPlayer}'s turn`);

    moveIndex = getMoveIndex(userPlayer, currentPlayer);
    console.clear();

    BOARD[moveIndex] = currentPlayer;

    if (isWinState()) {
      declareWinner(currentPlayer);
      break;
    } else if (isBoardFull()) {
      declareDraw();
      break;
    } else {
      currentPlayer = (currentPlayer === 'x') ? 'o' : 'x';
    }
  }

  playAgain = doesUserWantToPlayAgain();
  console.clear();
  if (!playAgain) prompt("Thank you for playing. Goodbye!");
}