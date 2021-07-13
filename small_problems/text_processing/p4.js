/*

INPUT - String
OUTPUT - String

RULES:
-First letter of each word in the string must be capitalized
-All letters which are not the first letter must be lowercase.
-Word is defined by non-whitespace characters

ALGORITHM:
-Separate string into words
-Iterate over Words
  -If character is first in word, capitalize
  -Else make lowercase
-Return correct characters for each word
-Convert words back into string
-Return String

DATA STRUCTURES:
-Array - Used to store words from string

*/

function wordCap(sentence) {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'