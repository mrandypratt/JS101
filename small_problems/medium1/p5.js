/*

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Problem: 
-replace number words with numbers

Examples
-'five'
-'four.'

Data Structure:
-String => string

Algorithm:
-Create object of numbered words
-Iterate over object
  -replace all occurances of word with number
-return word

*/

function wordToDigit(sentence) {
  let numberWords = {
    0: 'zero', 
    1: 'one', 
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine' 
  };
  
  for (let number in numberWords) {
    sentence = sentence.replaceAll(numberWords[number], number)
  }
  return sentence;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."