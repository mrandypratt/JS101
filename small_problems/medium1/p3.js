/*

Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise

Problem:
-integer as input
-take the first digit and move to the back of the number
  -lock in leading number and repeat process with remaining numbers
  -repeat this until there is only one digit remaining
  -return the number
-Assumptions:
  -Input will always be positive integer
-Edge cases: if only one digit, return digit

Example:
-735291 => 7 & 35291 => swap => 352917
-Locked = 3 & rotateNum = 52917
  -5 & 2917 => swap => 2917

Data Structure:
Integer => String => Array => String => Integer

Algorithm:
-Input: Integer 
-If integer < 10 => return integer
-Integer => String => Array of Numbers
  -Feed array into rotate function which returns rotated array
  -Destructively remove formost digit and add to new array
  -Repeat until all digits are removed from original array

*/

function maxRotation(number) {
  let newNumArray = [];
  let originalNumArray = String(number).split('');
  while (originalNumArray.length) {
    originalNumArray = originalNumArray.slice(1).concat(originalNumArray[0]);
    newNumArray.push(originalNumArray.shift())
  }
  return Number(newNumArray.join(''));
}



console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845