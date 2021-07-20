/*

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Problem:
-Accept two integers, bigNumber and rotation
-bigNumber is a number with 6 digits
-rotation is the width of the rotation (1 => in place, 2 => switch with digit to left, etc)
-return switchedNum which is the digit after the rotation

Implicit Rules:
-Input Validation:
  -Both arguments are assumed to be integers
  -bigNumber is assumed to be 6 characters in length

Data Structures:
-Number => String => Array => String => Number

Algorithm:
-Accept two integers, bigNumber and rotation, as arguments
-if rotation = 1 => return bigNumber
-Convert bigNumber to string then to array of characters
-Reverse bigNumber array
-

*/

function rotateRightmostDigits(bigNumber, rotation) {
  let reverseBigNumberArr = String(bigNumber).split('').reverse();
  let newLastDigit = reverseBigNumberArr.splice(rotation - 1, 1);
  return Number(reverseBigNumberArr.reverse().concat(newLastDigit).join(''));

}



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917