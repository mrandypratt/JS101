/*

Write a function that takes a string as an argument and returns that string with every lowercase 
letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other 
characters unchanged.

INPUT: String
OUTPUT: String

RULES:
-If a character is lowercase, it must be transformed to uppercase
-If a character is uppercase, it must be transformed to lowercase
-If a character is neither, leave it unchanged

ALGORITHM:
-Convert string to array of characters
-Iterate over every character in the array of characters
  -If character is lowercase, return uppercase version
  -if character is uppercase, return lowercase version
  -else, return character
-convert array back to string
-return new string

DATA STRUCTURES:
-Array for Characters

*/

function swapCase(str) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/)) return char.toUpperCase();
    if (char.match(/[A-Z]/)) return char.toLowerCase();
    return char;
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"