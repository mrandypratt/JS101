function xor(condition1, condition2) {
  return ((condition1 || condition2) && !(condition1 && condition2))
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
