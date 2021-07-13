const readline = require('readline-sync');
const SQUARE_FEET_PER_SQUARE_METER = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateSquareMeters(lengthInMeters, widthInMeters) {
  let squareMeters = lengthInMeters * widthInMeters;
  return squareMeters;
}

function calculateSquareFootage(lengthInMeters, widthInMeters) {
  let squareMeters = lengthInMeters * widthInMeters;
  let squareFootage = squareMeters * SQUARE_FEET_PER_SQUARE_METER;
  return squareFootage;
}

prompt('This App will calculate area given Length and Width');
prompt('Please enter the room length in meters: ');
let lengthInMeters = parseInt(readline.prompt());

prompt('Please enter the room width in meters: ');
let widthInMeters = parseInt(readline.prompt());

let squareMeters = calculateSquareMeters(lengthInMeters, widthInMeters);
let squareFootage = calculateSquareFootage(lengthInMeters, widthInMeters);

prompt(
  `The area of the room is ${squareMeters} square meters (or ${squareFootage} square feet).`
);
