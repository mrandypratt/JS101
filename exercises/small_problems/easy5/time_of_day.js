const MINUTES_IN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MINUTES_PER_DAY = HOURS_IN_A_DAY * MINUTES_IN_HOUR;

function timeOfDay(minutes) {
  let hours = 0;
  if (minutes >= MINUTES_IN_HOUR || minutes <= -MINUTES_IN_HOUR) {
    hours = Math.floor(minutes / MINUTES_IN_HOUR);
    minutes = minutes % MINUTES_IN_HOUR;
  }
  if (hours >= HOURS_IN_A_DAY || hours <= -HOURS_IN_A_DAY) {
    hours = Math.floor(hours / HOURS_IN_A_DAY);
  }

  if (minutes < 0 || hours < 0) {
    minutes += MINUTES_IN_HOUR;
    hours += HOURS_IN_A_DAY - 1;
  }
  return hours + ":" + minutes;

}


console.log(timeOfDay(0))// === "00:00");
console.log(timeOfDay(-3))// === "23:57");
console.log(timeOfDay(35))// === "00:35");
console.log(timeOfDay(-1437))// === "00:03");
console.log(timeOfDay(3000))// === "02:00");
console.log(timeOfDay(800))// === "13:20");
console.log(timeOfDay(-4231))// === "01:29");