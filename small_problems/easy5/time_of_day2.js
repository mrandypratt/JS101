const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * 24;

function getMinutes(timeString, afterMidnight) {
  if (timeString === '00:00' || timeString == '24:00') return 0;

  let hours = Number(timeString.slice(0, 2));
  let minutes = Number(timeString.slice(3, 5));

  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  if (afterMidnight) {
    return totalMinutes;
  } else {
    return MINUTES_PER_DAY - totalMinutes;
  }
}

function afterMidnight(timeString) {
  return getMinutes(timeString, true);
}

function beforeMidnight(timeString) {
  return getMinutes(timeString, false);
}

console.log(afterMidnight('00:00')); // === 0);
console.log(beforeMidnight('00:00')); // === 0);
console.log(afterMidnight('12:34')); // === 754);
console.log(beforeMidnight('12:34')); // === 686);
console.log(afterMidnight('24:00')); // === 0);
console.log(beforeMidnight('24:00')); // === 0);
