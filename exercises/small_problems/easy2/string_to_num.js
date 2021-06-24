function stringToInteger(string) {
  let number = []
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '0':
        number.unshift(0);
        break;
      case '1':
        number.unshift(1);
        break;
      case '2':
        number.unshift(2);
        break;
      case '3':
        number.unshift(3);
        break;
      case '4':
        number.unshift(4);
        break;
      case '5':
        number.unshift(5);
        break;
      case '6':
        number.unshift(6);
        break;
      case '7':
        number.unshift(7);
        break;
      case '8':
        number.unshift(8);
        break;
      case '9':
        number.unshift(9);
        break;
    }
  }
  return convertArrayToNumber(number)
}

function convertArrayToNumber(numbers) {
  let newNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    newNumber += numbers[i] * Math.pow(10, i);
  }
  return newNumber;
}

console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true
