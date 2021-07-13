const NUM_WORDS = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(numArray) {
  mappedNumbers = [];
  numArray.forEach((number, index) => {
    mappedNumbers.push([number, NUM_WORDS[index]])
  })
  let sortedNumbers = mappedNumbers.sort((a, b) => compare(a, b));
  return sortedNumbers.map(numMapping => numMapping[0]);

}

function compare(a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
