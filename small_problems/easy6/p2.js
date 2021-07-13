let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

function doubleConsonants(string) {
  return string.split('').map(letter => {
    if (letter.match(consonantRegex)) return letter.repeat(2);
    return letter;
  }).join('')
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
