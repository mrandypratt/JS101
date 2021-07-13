const readline = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();

let currentAge = Number(readline.question("What is your age? "));

if (!currentAge) console.log("Input Error");

let retirementAge = Number(readline.question("What year would you like to retire? "));

if (!retirementAge) console.log("Input Error");

console.log(`It is ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + retirementAge - currentAge}.`);
console.log(`You only have ${retirementAge - currentAge} years of work to go!`)



