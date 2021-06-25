const numberToStringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function signedIntegerToString(number) {
  let isNegative = number < 0;
  let isZero = number === 0;
  number = Math.abs(number);
  let string = "";
  while (true) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    string = numberToStringArray[remainder] + string;
    if (number < 1) break;
  }
  if (isNegative) {
    string = '-' + string;
  } else if (!isZero) {
    string = '+' + string;
  }
  return string;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");