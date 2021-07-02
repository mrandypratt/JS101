// let readline = require('readline-sync');

// function printMoveOptions() {
//   for (let row = 0; row < 3; row++) {
//     console.log("1 | 2 | 3");
//     if (row < 2) {
//       console.log("_________");
//     }
//   }
// }

// function printCurrentBoard(BOARD) {
//   for (let row = 0; row < 3; row++) {
//     console.log(`${BOARD[row][0]} | ${BOARD[row][1]} | ${BOARD[row][2]}`);
//     if (row < 2) {
//       console.log("_________");
//     }
//   }
// }

// function prompt(string) {
//   console.log(`=> ${string}`);
// }

// function checkIfValidMove(move, BOARD) {
//   if (!(Number(move) <= 9 && Number(move >= 1))) {
//     prompt("Not a valid selection.");
//     return false;
//   } else if (BOARD.flatten()[Number(move)]) {
//     prompt("Selected Space is occupied.")
//     return false;
//   } else {
//     return true;
//   }
// } 

// //const BOARD = [[], [], []];

// // prompt('Welcome to Tic Tac Toe!');

// let playAgain = true;

// while (playAgain) {
//   let player = 'x';
//   let gameOver = false;
//   let movesRemaining = true;
//   let isWinner = false;
//   let playAgainResponse;
//   let currentMove;
//   let validMove;

//   // for (let row = 0; row < 3; row++) {
//   //   for (let column = 0; column < 3; column++) {
//   //     BOARD[row][column] = null;
//   //   }
//   // }

//   while (!gameOver) {

//     printMoveOptions();

//     printCurrentBoard(BOARD);

//     while (true) {
//       prompt(`${player}'s turn. Select where you would like to move.`);
//       currentMove = readline.question();
//       validMove = checkIfValidMove(currentMove);
//       if (validMove) {
//         break;
//       }
//     }

//     updateBoard(currentMove, player, BOARD);

//     isWinner = checkIfWinner(player, BOARD);

//     movesRemaining = checkIfMovesRemaining(BOARD);

//     if (isWinner || !movesRemaining) {
//       prompt('Game Over.');
//       gameOver = true;
//       prompt('Would you like to play again? (y/n)');
//     }
//   }
// }
