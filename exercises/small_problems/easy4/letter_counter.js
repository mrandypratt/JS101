function wordSizes(string) {
  let wordCount = {};
  let wordsArray = string.split(" ");
  if (string === '') return wordCount;
  for (let index = 0; index < wordsArray.length; index++) {
    if (!wordCount[String(wordsArray[index].length)]) {
      wordCount[String(wordsArray[index].length)] = 1;
    } else {
      wordCount[String(wordsArray[index].length)] += 1;
    }
  }
  return wordCount;
}

console.log(wordSizes('Four score and seven.'));   // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));       // {}