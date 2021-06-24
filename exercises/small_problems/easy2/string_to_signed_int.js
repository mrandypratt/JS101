function stringToSignedInteger(string) {
  let numberArray = [];
  let isNegative;
  if (string[0] === '+') {
    isNegative = false;
    string = string.slice(1);
  } else if (string[0] === '-'){
    isNegative = true;
    string = string.slice(1);
  } else {
    isNegative = false;
  }

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '0':
        numberArray.unshift(0);
        break;
      case '1':
        numberArray.unshift(1);
        break;
      case '2':
        numberArray.unshift(2);
        break;
      case '3':
        numberArray.unshift(3);
        break;
      case '4':
        numberArray.unshift(4);
        break;
      case '5':
        numberArray.unshift(5);
        break;
      case '6':
        numberArray.unshift(6);
        break;
      case '7':
        numberArray.unshift(7);
        break;
      case '8':
        numberArray.unshift(8);
        break;
      case '9':
        numberArray.unshift(9);
        break;
    }
  }
  let number = convertArrayToNumber(numberArray)
  if (isNegative) {
    number *= -1;
  }

  return number;
}

function convertArrayToNumber(numbers) {
  let newNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    newNumber += numbers[i] * Math.pow(10, i);
  }
  return newNumber;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
