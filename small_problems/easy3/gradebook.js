function getGrade(test1, test2, test3) {
  let average = (test1 + test2 + test3) / 3;
  if (average <= 100 && average >= 90) {
    return "A";
  } else if (average <= 90 && average >= 80) {
    return "B";
  } else if (average <= 80 && average >= 70) {
    return "C";
  } else if (average <= 70 && average >= 60) {
    return "D";
  } else {
    return "FAILURE MUAHAHAHAHA!"
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"