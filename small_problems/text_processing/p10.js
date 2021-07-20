/* 

Problem:
-Search for word in text
  -Replace word with highlighted word (word => **WORD**)
-Repeat for all instances of word
-Return highlighted text

Examples:
Returns highlight: "Sed ut", "fugit, sed quia", "consequatur? Sed quis"
Does not match: "consequatur blasedbla?"

Implicit Rules:
-Word match is case-insensitive
-Word match may only have spaces surrounding
-Word may be beginning of text
-Word may not be surrounded by alphabetical characters

Data Structures:
-Text String => Array of Words => Iterate & Replace => String

Algorithm:
-Accept searchWord and text arguments
-Input validation: NONE - assumed valid input
-Convert Text into Array of textWords by splitting on space
-Iterate over each textWord in array:
  -If searchWord matches textWord return textWord Uppercased and appended with ** on each side
  -Else return textWord
-Convert Array into String and return

*/

function searchWord(searchWord, text) {
  return text.split(' ').map(currentWord => {
    if (currentWord.toLowerCase() !== searchWord.toLowerCase()) return currentWord;
    return `**${currentWord.toUpperCase()}**`
  }).join(' ')
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"
