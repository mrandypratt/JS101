/*



Problem:
-Transpose a matrix non-destructively

Assumptions:
-3 x 3 matrix
-Array of arrays

INPUT: Array of arrays
OUTPUT: array of arrays

Data Structure:
-Array

Algorithm:
-accept matrix as argument
-declare newMatrix as [[][][]]
-create two nested loops:
  Update values as such:

  -newMatrix[0][0] = matrix[0][0]
  -newMatrix[0][1] = matrix[1][0]
  -newMatrix[0][2] = matrix[2][0]

  -newMatrix[1][0] = matrix[0][1]

*/

function transpose(matrix) {
  let originalNumOfRows = matrix.length;
  let originalNumOfColumns = matrix[0].length;
  let newMatrix = [];
  for (let row = 0; row < originalNumOfColumns; row++) {
    newMatrix.push([])
  }

  for (let newRow = 0; newRow < originalNumOfColumns; newRow++) {
    for (let newColumn = 0; newColumn < originalNumOfRows; newColumn++) {
      newMatrix[newRow][newColumn] = matrix[newColumn][newRow];
    }
  }
  return newMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
