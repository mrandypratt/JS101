const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

const language = getLanguage();

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

function prompt(message) {
  console.log(`=> ${message}`);
}

function getNumberFromUser() {
  while (true) {
    let num = readline.question();
    debugger;
    if (num === 'exit') {
      return false;
    }
    if (Number(num) === 0) {
      return Number(num);
    } else if (!Number(num)) {
      prompt(MESSAGES[language].invalidNumber); 
    } else {
      return Number(num);
    }
  }
}

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

function calculate(num1, num2, operation) {
  switch (operation) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      if (num2 === 0) {
        return "Cannot Divide by Zero."
      } else {
        return num1 / num2;
      }
    default:
      return `${operation} ${MESSAGES.notValid}`;
  }
}

// Beginning of Program

prompt(MESSAGES[language].greet);
prompt(MESSAGES[language].exit);

while (true) {

  prompt(MESSAGES[language].firstNumber);
  let num1 = getNumberFromUser();
  if (num1 === false) {
    break;
  }

  prompt(MESSAGES[language].secondNumber);
  let num2 = getNumberFromUser();
  if (num2 === false) {
    break;
  }

  let operation = getOperationFromUser();
  if (operation === false) {
    break;
  }

  let result = calculate(num1, num2, operation);

  prompt(`${result}`);
}