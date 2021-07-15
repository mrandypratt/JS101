/*

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

INPUT: String
OUTPUT: String

RULES: 
-First Character should be capitalized
-Second Letter should be lowercase
-Non Alphabetical Characters should not be treated specially

Data Structure:
-Array for handling string characters

Algorithm:
-Convert String to Array of characters
-Iterate over each character with it's zero-based index
  -if character index is even return uppercase character
  -if character index is odd return lowercase character
-convert returned array back to string
-return converted string

*/

function staggeredCase(str) {
  return str.split('').map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"