//Question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

console.log(padding + title + padding);

// Question 10
let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

function countLowerT(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === 't') {
      counter += 1;
    }
  }
  return counter;
}

console.log(countLowerT(statement1));
console.log(countLowerT(statement2));
