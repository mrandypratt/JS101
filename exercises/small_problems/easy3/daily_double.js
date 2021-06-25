function crunch(string) {
  let stringAsArray = string.split('');
  let indexToDelete = [];
  stringAsArray.forEach((letter, index) => {
    if (letter === stringAsArray[index + 1]) {
      indexToDelete.unshift(index + 1);
    }
  });
  for (let i = stringAsArray.length; i > 0; i--) {
    if (indexToDelete.includes(i)) {
      stringAsArray.splice(i, 1);
    }
  }
  return stringAsArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""