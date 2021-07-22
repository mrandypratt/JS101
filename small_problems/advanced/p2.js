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
  let newMatrix = [[],[],[]]
  for (let first = 0; first < 3; first++) {
    for (let second = 0; second < 3; second++) {
      newMatrix[first][second] = matrix[second][first];
    }
  }
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
