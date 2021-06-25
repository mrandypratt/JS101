function century(year) {
  let century = Math.ceil(year / 100);
  let string = String(century);
  let lastChar = string[string.length - 1]
  let nextToLastChar = string[string.length - 2];
  if (lastChar === '1' && nextToLastChar !== '1') {
    string += 'st';
  } else if (lastChar === '2' && nextToLastChar !== '1') {
    string += 'nd';
  } else if (lastChar === '3' && nextToLastChar !== '1') {
    string += 'rd';
  } else {
    string += 'th';
  }
  return string;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"