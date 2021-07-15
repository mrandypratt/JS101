/*

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Modify the function above so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

INPUT: String
OUTPUT: String

RULES: 
-First Character should be capitalized
-Second Letter should be lowercase
-Non Alphabetical Characters should be returned and not affect the alternation pattern

Data Structure:
-Array for handling string characters

Algorithm:
-Convert String to Array of characters
-Use Boolean to track case starting with Uppercase
-Iterate over each character
  -if character is not alphabetic return character
  -else
    -flip Boolean value and return based on boolean value
-convert returned array back to string
-return converted string

*/

function staggeredCase(str) {
  let isUpper = true;
  return str.split('').map(char => {
    if (!char.match(/[a-z]/gi)) return char;
    if (isUpper) {
      isUpper = false;
      return char.toUpperCase();
    } else {
      isUpper = true;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);