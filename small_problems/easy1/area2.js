const readline = require('readline-sync');
const SQ_METER_TO_SQ_FEET = 10.7639;
const SQ_FEET_TO_SQ_METER = 1 / SQ_METER_TO_SQ_FEET;
const UNIT_OPTIONS = ['meters', 'feet']

function prompt(message) {
  console.log(`${message}`);
}

function getValidUnitFromUser() {
  while (true) {
    prompt("Please select you preferred unit of measurement:")
    prompt('Type "1" for Meters and "2" for Feet.');
    let selectedUnit = readline.prompt();
    if (selectedUnit === "1") {
      return UNIT_OPTIONS[0];
    } else if (selectedUnit === "2") {
      return UNIT_OPTIONS[1];
    } else {
      prompt(`${selectedUnit} is not a valid response.`);
    }
  }
}

function calculateSelectedArea(length, width) {
  return length * width;
}

function determineConvertedUnit(selectedUnit) {
  if (selectedUnit === 'feet') {
    return 'meters';
  } else {
    return 'feet';
  }
}

function calculatedConvertedArea(length, width, selectedUnit) {
  let area = length * width;
  if (selectedUnit === 'feet') {
    return area * SQ_FEET_TO_SQ_METER;
  } else {
    return area * SQ_METER_TO_SQ_FEET;
  }
}

prompt('This App will calculate area given Length and Width');

let selectedUnit = getValidUnitFromUser();

prompt(`Please enter the room length in ${selectedUnit}:`);
let length = parseInt(readline.prompt());

prompt(`Please enter the room width in ${selectedUnit}:`);
let width = parseInt(readline.prompt());

let userSelectedArea = calculateSelectedArea(length, width);

let convertedUnit = determineConvertedUnit(selectedUnit);

let convertedArea = calculatedConvertedArea(length, width, selectedUnit);



prompt(`The area of the room is ${userSelectedArea.toFixed(2)} square ${selectedUnit} or ${convertedArea.toFixed(2)} square ${convertedUnit}`);