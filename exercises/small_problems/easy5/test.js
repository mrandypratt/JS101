const MINUTES_IN_HOUR = 60;
const HOURS_IN_A_DAY = 24;



function timeOfDay(minutes) {
  if (minutes === 0) return "00:00"
  let afterMidnight = minutes > 0;
  minutes = Math.abs(minutes);
  let hours = 0;
  if (minutes >= 60) hours = minutes / MINUTES_IN_HOUR;
  minutes = Math.floor(minutes % MINUTES_IN_HOUR)
  return minutes + ":" + hours;
}


console.log(timeOfDay(0))// === "00:00");
console.log(timeOfDay(-3))// === "23:57");
console.log(timeOfDay(35))// === "00:35");
console.log(timeOfDay(-1437))// === "00:03");
console.log(timeOfDay(3000))// === "02:00");
console.log(timeOfDay(800))// === "13:20");
console.log(timeOfDay(-4231))// === "01:29");