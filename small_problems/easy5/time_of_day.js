const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function stringify(hours, minutes) {
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
}

function timeOfDay(minutes) {
  let hours = 0;
  //return zero if zero
  if (minutes === 0) return stringify(minutes, hours)

  //Store negative minutes as Boolean and remove sign
  let beforeMidnight = minutes < 0;
  minutes = Math.abs(minutes);

  //extract multiple days from minutes
  while (minutes >= MINUTES_PER_DAY) {
    minutes -= MINUTES_PER_DAY;
  }

  //extract hours from minutes
  while (minutes >= MINUTES_PER_HOUR) {
    hours += 1
    minutes -= MINUTES_PER_HOUR
  }

  //calculate conditionally if before or after midnight
  if (beforeMidnight) {
    hours = HOURS_PER_DAY - 1 - hours;
    minutes = MINUTES_PER_HOUR - minutes;
  }

  //stringify answer
  return stringify(hours, minutes);
}


console.log(timeOfDay(0))// === "00:00");
console.log(timeOfDay(-3))// === "23:57");
console.log(timeOfDay(35))// === "00:35");
console.log(timeOfDay(-1437))// === "00:03");
console.log(timeOfDay(3000))// === "02:00");
console.log(timeOfDay(800))// === "13:20");
console.log(timeOfDay(-4231))// === "01:29");