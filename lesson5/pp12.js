let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arr.map(subarray => {
  return subarray.filter(number => number % 3 === 0)
});

console.log(arr)
console.log(multiplesOfThree)
