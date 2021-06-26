function runningTotal(numbers) {
  let runningTotal = [numbers[0]]
  if (numbers.length === 0) return [];
  numbers.reduce((accumulator, currentValue) => {
    runningTotal.push(accumulator + currentValue);
    return accumulator + currentValue;
  });
  return runningTotal;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []