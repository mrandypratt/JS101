function twice(number) {
  return (isDoubleDouble(number)) ? number : number * 2;
}

function isDoubleDouble(number) {
  let string = String(number);
  if (string.length % 2 !== 0) return false;
  let firstHalf;
  let secondHalf;
  if (string.length === 2) {
    firstHalf = string[0];
    secondHalf = string[1];
  } else {
    firstHalf = string.slice(0, (string.length / 2) -1);
    secondHalf = string.slice(string.length / 2, string.length - 1);
  }
  return firstHalf === secondHalf;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676