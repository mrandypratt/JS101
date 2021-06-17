const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

function prompt(string) {
  console.log(`=> ${string}`);
}

//Greet User and Explain Process
prompt(MESSAGES.welcome);
prompt(MESSAGES.explainApp);
prompt(MESSAGES.explainSteps);

//Get loan Amount from User
function getLoanAmount() {
  while (true) {
    prompt(MESSAGES.requestLoanAmount);
    let loanAmount = readline.question();
    if (loanAmount === 'exit') { return false; }
    //Filter out unwanted input
    if (Number(loanAmount) > 0) {
      //Return Number with 2 decimal places
      return Number(loanAmount).toFixed(2);
    } else {
      prompt(MESSAGES.invalidInput);
    }
  }
}

//Get Loan Duration in Months
function getLoanDuration() {
  while (true) {
    prompt(MESSAGES.requestLoanDuration);
    let loanDuration = readline.question();
    if (loanDuration === 'exit') { return false; }
    //Filter out unwanted input
    if (Number(loanDuration) > 0) {
      //Return Number with 2 decimal places
      return Math.round(Number(loanDuration));
    } else {
      prompt(MESSAGES.invalidInput);
    }
  }
}

function getAnnualInterestRate() {
  while (true) {
    prompt(MESSAGES.requestAPR);
    let APR = readline.question();
    if (APR === 'exit') { return false; }
    //Filter out unwanted input
    if (Number(APR) > 0) {
      //Return Number with 2 decimal places
      return Number(APR).toFixed(2);
    } else {
      prompt(MESSAGES.invalidInput);
    }
  }
}

//Convert APR to Monthly Rate
function calculateMonthlyInterestRate(apr) {
  //Convert number to percentage and divide by 12
  return (apr / 100) / 12;
}

//Calculate and Display Monthly Payment
function calculateMonthlyPayment(loanAmount, loanDurationMonths, monthlyInterestRate) {
  //Calculate
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  //Convert to 2 decimals
  monthlyPayment = monthlyPayment.toFixed(2);
  //Display to User
  prompt(`${MESSAGES.monthlyPayment} $${monthlyPayment}.`);
}

while (true) {
  //Request Loan Amount (floating point or integer)
  let loanAmount = getLoanAmount();
  if (loanAmount === false) { break; }

  //Request Loan Duration in Months
  let loanDurationMonths = getLoanDuration();
  if (loanDurationMonths === false) { break; }

  //Request Annual Percentage Rate (APR) & Convert to Monthly Interest
  let annualInterestRate = getAnnualInterestRate();
  if (annualInterestRate === false) { break; }

  //Convert to Monthly Interest Rate
  let monthlyInterestRate = calculateMonthlyInterestRate(annualInterestRate);

  //Calculate Monthly Payment
  calculateMonthlyPayment(loanAmount, loanDurationMonths, monthlyInterestRate);
}




