/*

  Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

  You may assume that every pair of words in the string will be separated by a single space.

  INPUT: String
  OUTPUTS: Array

  RULES:
  -String broken into array of words
  -words must have space appended followed by the word's original length
  -Space Characters are assumed to split words in original string
  -Only one space between words is assumed
  -If no argument or empty string argument, return blank array
  

  DATA STRUCTURE:
  -Array

  ALGORITHM:
  -If no parameter provided, default to ""
  -If string is empty, return blank array
  -Split the string into an array using space delimiter
  -Iterate over the array for each word
    -get length of word
    -return word concatenated with a space and length
  -return the new array with lengths

*/

function wordLengths(str="") {
  if (str === "") return [];
  return str.split(' ').map(word => word + " " + word.length);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
