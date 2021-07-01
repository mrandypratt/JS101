let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function reduceOdds(arr) {
  let totalOdd = arr.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc;
    }
  })
  return totalOdd;
}

function compare(a, b) {
  let totalOddA = reduceOdds(a);
  let totalOddB = reduceOdds(b);

  if (totalOddA < totalOddB) return -1;
  if (totalOddA > totalOddB) return 1;
  return 0;
}

arr.sort((a, b) => compare(a, b))

console.log(arr);
