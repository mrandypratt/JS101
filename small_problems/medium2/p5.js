/*

A featured number  is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Problem:
-Given an integer, determine if it is a featured number, which must abide by the following:
  -Odd number
  -Multiple of 7
  -No repeated digits
  -Greater than input.
-If there is no such integer, issue an error message


Assumptions:
-No Negative Integers
-No non-integer input

INPUT: integer
OUTPUT: integer (featured number)


Data Structure:
-Integer => string (for testing) = returned featured number

Algorithm:
-accept integer as input
-declare error message constant
-iterate over integers greater than input number until 9876543201)
  -If...
    -If odd &&
    -If evenly divisible by 7 &&
    -No repeating digits
  -Return number
-return error

*/

function repeats(num) {
  let string = String(num)
  for (char = 0; char < num; char++) {
    if (string.slice(char + 1).includes(string[char])) return true;
  }
  return false;
}

function featured(num) {
  const biggestNum = 9876543201;
  console.log(num + (num - num % 7))
  // for (let currentNum = startingNum; currentNum <= biggestNum; currentNum += 14) {
  //   if (!repeats(currentNum)) break;
  //   console.log(currentNum)
  //   if (currentNum % 2 !== 0 && currentNum % 7 === 0 && !repeats(currentNum)) return currentNum;
  // }
  // return "This is an ErroR MessAge";
}


// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."