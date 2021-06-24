const readline = require('readline-sync');

function prompt(string) {
  console.log(`==> ${string}`);
}

prompt('Enter the first number: ');
let num1 = readline.question();

prompt('Enter the second number: ');
let num2 = readline.question();

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
