// import readline
const readline = require('readline-sync');

// Prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

function getNumberFromUser() {
  while (true) {
    let num = readline.question();
    if (!Number(num)) {
      prompt("Please enter a valid number");
    } else {
      return Number(num);
    }
  }
}

function getOperationFromUser() {
  while (true) {
    prompt('Select an Operation:\n1. Add 2. Subtract 3. Multiply 4. Divide');
    let operation = Number(readline.question());
    if (operation >= 1 && operation <= 4) {
      return operation;
    } else {
      prompt("That was not a valid selection");
    }
  }
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return `${operation} is not a valid operation.`;
  }
}

// Greet User
prompt("Welcome to the Calculator!");

// Request Numbers and Operation
prompt("Provide the first number:");
let num1 = getNumberFromUser();

prompt("Provide the second number:");
let num2 = getNumberFromUser();

let operation = getOperationFromUser();

// perform the operation on the two numbers
let result = calculate(num1, num2, operation);

// Display the result
prompt(result);