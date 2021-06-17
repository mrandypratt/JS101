// import readline
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

// Request Language
function getLanguage() {
  while (true) {
    prompt(MESSAGES.english.selectLanugage);
    prompt(MESSAGES.spanish.selectLanugage);
    prompt(MESSAGES.languageOptions);
    let lang = readline.question();
    if (lang === '1') {
      return "english";
    } else if (lang === '2') {
      return 'spanish';
    } else {
      prompt(MESSAGES.english.invalidLanguage);
      prompt(MESSAGES.spanish.invalidLanguage);
    }
  }
}

// Create Prompts
function prompt(message) {
  console.log(`=> ${message}`);
}

// Get valid numbers from User
function getNumberFromUser() {
  while (true) {
    let num = readline.question();
    if (num === 'exit') {
      return false;
    }
    if (!Number(num)) {
      prompt(MESSAGES[language].invalidNumber);
    } else {
      return Number(num);
    }
  }
}

// Get valid operation from User
function getOperationFromUser() {
  while (true) {
    prompt(MESSAGES[language].selectOperation);
    let operation = readline.question();
    if (operation === 'exit') {
      return false;
    }
    operation = Number(operation);
    if (operation >= 1 && operation <= 4) {
      return operation;
    } else {
      prompt(MESSAGES[language].invalidOperation);
    }
  }
}

// Calculate numbers with selected operation
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
      return `${operation} ${messages.notValid}`;
  }
}

// Beginning of Program

//Request Language
const language = getLanguage();
prompt(MESSAGES[language].greet);
prompt(MESSAGES[language].exit);

while (true) {
  // Request Numbers and Operation
  prompt(MESSAGES[language].firstNumber);
  let num1 = getNumberFromUser();
  if (num1 === false) { break; }

  prompt(MESSAGES[language].secondNumber);
  let num2 = getNumberFromUser();
  if (num2 === false) { break; }

  let operation = getOperationFromUser();
  if (operation === false) { break; }

  // perform the operation on the two numbers
  let result = calculate(num1, num2, operation);

  // Display the result
  prompt(`${result}`);
}