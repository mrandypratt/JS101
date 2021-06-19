const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

function prompt(string) {
  console.log(`=> ${string}`);
}

function checkIfExit(response) {
  if (response.toLowerCase() === 'exit') {
    prompt(MESSAGES.goodbye);
    return true;
  } else {
    return false;
  }
}

function getLoanAmount() {
  while (true) {
    prompt(MESSAGES.requestLoanAmount);
    let loanAmount = readline.question();
    let isExit = checkIfExit(loanAmount);
    if (isExit) {
      return false;
    }
    let validLoanAmount = isValidLoanAmount(loanAmount);
    if (validLoanAmount) {
      return Number(loanAmount).toFixed(2);
    }
  }
}

function isValidLoanAmount(loanAmount) {
    if (Number(loanAmount) > 0) {
      return true;
    } else {
      prompt(MESSAGES.invalidInput);
      return false;
    }
}

function getLoanDuration() {
  while (true) {
    prompt(MESSAGES.requestLoanDuration);
    let loanDuration = readline.question();
    let isExit = checkIfExit(loanDuration);
    if (isExit) {
      return false;
    }
    let validLoanDuration = isValidLoanDuration(loanDuration);
    if (validLoanDuration) {
      return Math.round(Number(loanDuration));
    }
  }
}

function isValidLoanDuration(loanDuration) {
  if (Number(loanDuration) > 0) {
    return true;
  } else {
    prompt(MESSAGES.invalidInput);
    return false;
  }
}

function getAPR() {
  while (true) {
    prompt(MESSAGES.requestAPR);
    let APR = readline.question();
    let isExit = checkIfExit(APR);
    if (isExit) {
      return false;
    }
    let validAPR = isValidAPR(APR);
    if (validAPR) {
      return Number(APR).toFixed(2);
    }
  }
}

function isValidAPR(APR) {
  if (Number(APR) > 0) {
    return true;
  } else {
    prompt(MESSAGES.invalidInput);
    return false;
  }
}

function calculateMonthlyInterestRate(APR) {
  return (APR / 100) / 12;
}

function calculateMonthlyPayment(loanAmount, 
 loanDurationMonths, monthlyInterestRate) {

  let monthlyPayment = loanAmount * (monthlyInterestRate / 
   (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  return monthlyPayment.toFixed(2);
}

function displayMonthlyPayment(monthlyPayment) {
  prompt(`${MESSAGES.monthlyPayment} $${monthlyPayment}.`);
}

function seeIfUserWantsToTryAgain() {
  while (true) {
    prompt(MESSAGES.tryAgain)
    let response = readline.question();
    response = response.toLowerCase();
    if (response === 'exit' || response === 'n') {
      prompt(MESSAGES.goodbye);
      return false;
    } else if (response === 'y') {
      return true;
    } else {
      prompt(MESSAGES.invalidInput)
    }
  }
}

while (true) {
  prompt(MESSAGES.welcome);
  prompt(MESSAGES.explainApp);
  prompt(MESSAGES.explainSteps);

  let loanAmount = getLoanAmount();
  if (loanAmount === false) {
    break;
  }

  let loanDurationMonths = getLoanDuration();
  if (loanDurationMonths === false) {
    break;
  }

  let APR = getAPR();
  if (APR === false) {
    break;
  }

  let monthlyPayment;
  if (APR === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  } else {
    let monthlyInterestRate = calculateMonthlyInterestRate(APR);
    monthlyPayment = calculateMonthlyPayment(loanAmount, loanDurationMonths, monthlyInterestRate);
  }

  displayMonthlyPayment(monthlyPayment);
  prompt("");
  
  let tryAgain = seeIfUserWantsToTryAgain();
  if (!tryAgain) {
    break;
  }
}