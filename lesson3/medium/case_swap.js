function swapCase (string) {
  let stringArray = string.split('');
  let swapCaseArray = stringArray.map(letter => {
    if (letter.match(/[A-Z]/)) {
      return letter.toLowerCase();
    } else if (letter.match(/[a-z]/)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });
  return swapCaseArray.join('');
}

console.log(swapCase('Hello, my little Angel!'));