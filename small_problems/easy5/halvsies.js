function halvsies(array) {
  if (array.length < 2) return [array, []];
  let arr1 = array.splice(0, (Math.ceil(array.length / 2)));
  return [arr1, array];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]