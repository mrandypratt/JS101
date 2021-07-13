function wordSizes(string) {
  let letterCount = {};
  let wordsArray = string.split(" ");
  if (string === '') return letterCount;
  let currentWord;
  for (let index = 0; index < wordsArray.length; index++) {
    currentWord = wordsArray[index]
    currentWord = currentWord.replace(/\W/g, "");;
    if (!letterCount[String(currentWord.length)]) {
      letterCount[String(currentWord.length)] = 1;
    } else {
      letterCount[String(currentWord.length)] += 1;
    }
  }
  return letterCount;
}

console.log(wordSizes('Four score and seven.'));                       
// { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
// { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              
// { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            
// {}