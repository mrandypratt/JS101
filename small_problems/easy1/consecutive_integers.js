const readline = require('readline-sync');

function getValidInteger() {
  while (true) {
    let integer = readline.prompt('Please enter an integer greater than 0: ');
    if ((!Number(integer)) || (Number(integer) < 1)) {
      console.log(`${integer} is not a valid input.`)
    } else {
      return Math.round(Number(integer));
    }
  }
}

function getValidCalculation() {
  while (true) {
    let calculation = readline.prompt('Enter "s" to compute the sum, or "p" to compute the product: ')
    if (calculation.toLowerCase() === 's') {
      return 'sum';
    } else if (calculation.toLowerCase() === 'p') {
      return 'product';
    } else {
      console.log(`${calculation} is not a valid input`)
    }
  }
}

function sumConsecutiveIntegers(integer) {
  let sum = 0
  for (integer; integer >= 1; integer--) {
    sum += integer;
  }
  return sum;
}

function multiplyConsecutiveIntegers(integer) {
  let product = 1
  for (integer; integer >= 1; integer--) {
    product *= integer;
  }
  return product;
}
}

function calculateSumOrProduct(integer, calculation) {
  if (calculation === 'sum') {
    return sumConsecutiveIntegers(integer);
  } else if (calculation === 'product') {
    return multiplyConsecutiveIntegers(integer);
  } else {
    console.log("Calculation Validation Error")
  }
}

let selectedInteger = getValidInteger();
let selectedCalculation = getValidCalculation();
let sumOrProduct = calculateSumOrProduct(selectedInteger, selectedCalculation);

console.log(`The ${selectedCalculation} of the integers between 1 and ${selectedInteger} is ${sumOrProduct}`);


