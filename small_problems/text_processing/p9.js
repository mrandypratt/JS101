/*

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

INPUT: 2 Strings (word & string)
OUTPUT: Integer

RULES: 
-Count and return number of times word appears in string
-Number of Arguments will not be undefined
-Words include punctuation
-Capitalization is not relevant

DATA STRUCTURE: String => Array => Integer

ALGORITHM:
-Iterate over text 
  -If textChar does not match wordChar
    -reset to first wordChar
  -else
    -if wordChar is last char in word
      -increment wordCount
      -reset to first wordChar
    -else 
      -increment to next wordChar
*/

/*
function searchWord(word, text) {
  let wordCount = 0;
  let wordIndex = 0;
  for (let textIndex = 0; textIndex < text.length; textIndex++) {
    if (text[textIndex].toLowerCase() !== word[wordIndex].toLowerCase()) {
      wordIndex = 0;
    } else {
      if (wordIndex === word.length - 1) {
        wordCount += 1;
        wordIndex = 0;
      } else {
        wordIndex += 1;
      }
    }
  }
  return wordCount;
}

*/

function searchWord(word, text) {
  return text.match(new RegExp(word, 'gi')).length;
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3