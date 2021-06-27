function afterMidnight(timeString) {
  let hours = Number(timeString.slice(0, 1));
  let minutes = Number(timeString.slice(3, 4));

  return (hours * MINUTES_PER_HOUR) + minutes;
}

console.log(afterMidnight("00:00")); // === 0);
console.log(beforeMidnight("00:00")); // === 0);
console.log(afterMidnight("12:34")); // === 754);
console.log(beforeMidnight("12:34")); // === 686);
console.log(afterMidnight("24:00")); // === 0);
console.log(beforeMidnight("24:00")); // === 0);