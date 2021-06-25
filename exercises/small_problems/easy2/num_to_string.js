const numberToStringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(number) {
  let string = "";
  while (true) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    string = numberToStringArray[remainder] + string;
    if (number < 1) break;
  }
  return string;
}


console.log(integerToString(0));           // "0"
console.log(integerToString(4321));        // "4321"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
