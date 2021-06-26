function union(arr1, arr2) {
  let fullArray = arr1.concat(arr2).sort();
  let lastValue;
  let indexesToRemove = []
  let filteredArray = fullArray.filter((number, index) => {
    if (index === 0) {
      lastValue = number;
      return true;
    } else if (number !== lastValue) {
      lastValue = number;
      return true;
    } else {
      lastValue = number;
      return false;
    }
  });
  return filteredArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]