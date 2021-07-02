const readline = require('readline-sync');
const BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function prompt(string) {
  console.log(`=> ${string}`);
}

function printCurrentBoard(BOARD) {
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
  let column = 0;
  for (let row = 1; row <= 3; row++) {
    console.log(`${(row * column) + 1} | ${(row * column) + 2} | ${(row * column) + 3}`);
    if (row <= 2) {
      console.log("---------");
    }
    column++;
  }
}

function getMoveFromUser() {
  while (true) {
    prompt('Select a move (to see move options type "help")');
    let move = readline.question();
    if (move.toLowerCase() === 'help') {
      printMoveOptions();
    } else if (isValidMove(move)) {
      return move;
    }
  }
}
function isValidMove(move) {
  return Number(move) >= 1 && Number(move) <= 9;
}

prompt('Welcome to Tic Tac Toe!');

let playAgain = true;
let gameOver = false;

while (playAgain) {
  let user = getRandomPlayer

  while (!gameOver) {
    prompt("Current Board")
    printCurrentBoard(BOARD)

    getMoveFromUser();


    while (true) {
      prompt(`${player}'s turn. Select where you would like to move.`);
    }
  }
}
