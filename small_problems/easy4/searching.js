function getSixNumbers() {
  let numbers = []
  for (let i = 0; i < 6; i++) {
    numbers.push(readline.question("Enter a number: "));
  }
  return numbers;
}

let numbers = getSixNumbers();
let lastNumber = numbers.pop();
let doesAppear;
if (numbers.includes(lastNumber)) {
  doesAppear = "appears";
} else {
  doesAppear = 'does not appear';
}
console.log(`The number ${lastNumber} ${doesAppear} in ${numbers}`)