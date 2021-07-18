/*
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

INPUTS: String
OUTPUTS: Object

RULES:
-Count characters based the following:
  -alphabetical and uppercase
  -alphabetical and lowercase
  -non-alphabetical
-Counts are returned in object with properties => uppercase, lowercase, neither


DATA STRUCTURE:
-string, object

ALGORITHM:
-Declare counts object to store counts
-match all instances of Alphabetical uppercase characters
  -store value in counts
-match all instances of of alphabetical lowercase characters
  -store value in counts
-match all instances of non-alphabetical characters
  -store value in counts
-return counts

*/

function letterCaseCount(str) {
  let counts = {};
  return str.match(/[a-z]/g);
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));        // { lowercase: 0, uppercase: 0, neither: 0 }