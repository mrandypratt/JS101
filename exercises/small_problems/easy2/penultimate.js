function penultimate(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
