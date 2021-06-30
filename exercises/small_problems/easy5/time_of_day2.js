const MINUTES_PER_HOUR = 60;

function afterMidnight(timeString) {
  let hours = Number(timeString.slice(0, 1));
  console.log(hours);
  let minutes = Number(timeString.slice(3, 4));
  console.log(minutes);

  let minutesAfterMidnight = hours * MINUTES_PER_HOUR + minutes;
  return minutesAfterMidnight;
}

function beforeMidnight(timeString) {
  return timeString;
}

console.log(afterMidnight('00:00')); // === 0);
console.log(beforeMidnight('00:00')); // === 0);
console.log(afterMidnight('12:34')); // === 754);
console.log(beforeMidnight('12:34')); // === 686);
console.log(afterMidnight('24:00')); // === 0);
console.log(beforeMidnight('24:00')); // === 0);
