/*

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

INPUT: String
OUTPUT: Object

Problem: 
-Take in string as argument (will always be min one char)
-return percentage of characters that fall into each of three categories

Examples:
uppercase => "ABC"
lowercase => "abc"
neither => "123+ "

Data Structure:
{
  lowercase: 0
  uppercase: 0
  neither: 0
}

Algorithm:
-String input
  -Input Validation: Skipped
-Initialize object as per Data Structure
-iterate over string and count each character
  -if non alphabetic => neither
  -if uppercase = original => uppercase
  -else lowercase
-convert counts into percentages
  -Use count as numerator
  -Use string.length for denomenator
  -reassign value to object
-convert percentage into correct format
-return object

*/

function letterPercentages(string) {
  let percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  string.split('').forEach(char => {
    if (char.match(/[^a-z]/i)) percentages['neither'] += 1;
    if (char.match(/[A-Z]/)) percentages['uppercase'] += 1;
    if (char.match(/[a-z]/)) percentages['lowercase'] += 1;
  });

  for (let category in percentages) {
    percentages[category] = ((percentages[category] / string.length) * 100).toFixed(2);
  }

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
 
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }