function factors(number) {
  if (number === 0) return 0;
  let sign;
  (number < 0) ? sign = -1 : sign = 1
  let divisor = Math.abs(number);
  number = Math.abs(number);
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(sign * (number / divisor));
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(-5))