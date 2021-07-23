/*

Problem:
-Take an array of arrays and rotate 90 degrees
-Must not mutate original array

Assumptions:
-Input will be a single array with a minimum of 1 array nested inside

INPUT: Array with nested array(s)
OUTPUT: Array with nested array(s) rotated

Examples:

-Square:
  [1, 5, 8], => [3, 4, 1],
  [4, 7, 2], => [9, 7, 5],
  [3, 9, 6], => [6, 2, 8]
  
  -Starting Columns = 3
  -Starting Rows = 3

  -matrix[0][0] => newMatrix[0][2]
  -matrix[0][1] => newMatrix[1][2]
  -matrix[0][2] => newMatrix[2][2]
  -matrix[1][0] => newMatrix[0][1]
  -matrix[1][1] => newMatrix[1][1]
  -matrix[1][2] => newMatrix[2][1]
  -matrix[2][0] => newMatrix[0][0]
  -matrix[2][1] => newMatrix[1][0]
  -matrix[2][2] => newMatrix[2][0]

-Rectangle:
  [3, 4, 1], => [9, 3]
  [9, 7, 5], => [7, 4]
                [5, 1]

  -Starting Columns = 3
  -Starting Rows = 2

  -matrix[0][0] => newMatrix[0][1]
  -matrix[0][1] => newMatrix[1][1]
  -matrix[0][2] => newMatrix[2][1]
  -matrix[1][0] => newMatrix[0][0]
  -matrix[1][1] => newMatrix[1][0]
  -matrix[1][2] => newMatrix[2][0]

  -Ending Columns = 2
  -Ending Rows = 3


Data Structure:
-Nested Arrays

Algorithm:
-Create newMatrix as blank array
-Add rows in newMatrix equal to columns in matrix
-Iterate over original matrix adding values to newMatrix
-Return newMatrix

*/

function rotate90(matrix) {
  let newMatrix = [];
  let oldNumRows = matrix.length;
  let oldNumColumns = matrix[0].length;
  let newNumRows = oldNumColumns;
  let newNumColumns = oldNumRows;
  for (let row = 0; row < newNumRows; row++) {
    newMatrix.push([]);
  }


  for (let row = 0; row < oldNumColumns; row++) {
    for (let column = 0; column < oldNumRows; column++) {
      newMatrix[row][column] = matrix[oldNumRows - column - 1][row]
    }
  }
  return newMatrix;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
