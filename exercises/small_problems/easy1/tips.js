const readline = require('readline-sync');

function getInput(question) {
  return readline.question(`${question} => `);
}

function calculateTotalTip(billAmount, tipPercentage) {
  return billAmount * tipPercentage;
}

function calculateTotalBill(billAmount, tipPercentage) {
  return billAmount * (1 + tipPercentage);
}

let billAmount = Number(getInput("What is the bill?"));
let tipPercentage = Number(getInput('What is the tip percentage?')) / 100;

let totalTipAmount = calculateTotalTip(billAmount, tipPercentage);
let totalBillAmount = calculateTotalBill(billAmount, tipPercentage);

console.log("");
console.log(`The tip is $${totalTipAmount.toFixed(2)}`);
console.log(`The total bill is $${totalBillAmount.toFixed(2)}`);