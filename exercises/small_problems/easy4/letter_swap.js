function swap(string) {
  let wordsArray = string.split(" ");
  let reversedArray = wordsArray.map(word => switchLetters(word))
  return reversedArray.join(' ');
}

function switchLetters(word) {
  if (word.length < 2) return word;
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];
  let middle = word.slice(1, word.length - 1);
  return lastLetter + middle + firstLetter;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"