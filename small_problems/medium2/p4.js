/*

Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year.

Problem:
-Determine the number of Friday 13ths in a year, given the year
-Assumptions:
  -Year > 1752
-January 1, 2021 = Friday

INPUT: Integer (Year)
OUTPUT: Integer (Number of Friday 13ths)


Data Structure:
-Object of months with number of days
-

Algorithm:
-Find first day of year (Day of week)
-iterate over all the days of each month
  -if day is 13th, and also friday, increment counter
return counter

*/

function fridayThe13ths(year) {
  const daysOfWeek = ['m', 't', 'w', 'r', 'f', 's', 'sun'];
  let months = {
    jan: 31,
    feb: 28,
    mar: 31,
    apr: 30,
    may: 31,
    jun: 30,
    jul: 31,
    aug: 31,
    sep: 30,
    oct: 31,
    nov: 30,
    dec: 31
  }

  let firstDayOfYear;
  let friday13ths = 0;

  if (year % 4 === 0) months['feb'] = 29;

  Object.values(months).forEach(month => {
    for (let day = 0; day < month; day++) {
      if (day === 13 & dayOfWeek) friday13ths += 1;
  });

  return friday13ths;

}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2