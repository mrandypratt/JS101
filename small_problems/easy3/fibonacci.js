function findFibonacciIndexByLength (numberOfDigits) {
  let num1 = 1n;
  let num2 = 1n;
  let newNum;
  let counter = 2;
  do {
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
    counter += 1;
  } while ((newNum / (10n **(numberOfDigits - 1n))) < 1)
  return counter;
}


console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));

// The last example may take a minute or so to run.