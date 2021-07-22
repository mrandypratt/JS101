/*

Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

Problem:
-Take in an integer and return all numbers between 1 and the number
-For each number, do the following:
  -sum then square 
  -square then sum
-subtract the first from the second and return

Assumptions:
-Positive integer

INPUT: Integer
OUTPUT: Integer (sum of all numbers from one to int squared minus sum of each squared number from one to integer )

Data Structure:
-integer & sum variables

Algorithm:
-Accept positive integer as num
-Declare sumThenSquare & squareThenSum and initialize to 0
-Iterate from 1 through num using currentNum
  -increment sumThenSquare by currentNum
  -increment squareThenSum by currentNum squared
-Square sumThenSquare
-return sumThenSquare - squareThenSum

*/

function sumSquareDifference(num) {
  let sumThenSquare = 0;
  let squareThenSum = 0;
  for (let currentNum = 1; currentNum <= num; currentNum++) {
    sumThenSquare += currentNum;
    squareThenSum += (currentNum ** 2)
  }
  return (sumThenSquare ** 2) - squareThenSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
