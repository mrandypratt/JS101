let statement = "The Flintstones Rock";
let letterCount = {};

for (i = 0; i < statement.length; i++) {
  let letter = statement[i];
  if (!letterCount[letter]) {
    letterCount[letter] = 1;
  } else {
    letterCount[letter] += 1;
  }
}

console.log(letterCount);