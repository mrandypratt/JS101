function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    default:
      return `${operation} is not a valid operation.`
  }
}

// import readline
const readline = require('readline-sync');

// Welcome to the calculator
console.log("Welcome to the Calculator!");

// Ask for the first number
console.log("Provide the first number:");
let num1 = readline.question();

// Ask for the esecond number
console.log("Provide the second number:");
let num2 = readline.question();

// Ask for what operation to perform
console.log('Select an Operation: "add", "subtract", "multiply", or "divide"');
let operation = readline.question();

// perform the operation on the two numbers
let result = calculate(num1, num2, operation);

// Display the result
console.log(result)