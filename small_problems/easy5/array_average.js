function average(array) {
  let total = 0;
  array.forEach(number => total += number);
  let average = total / array.length;
  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40