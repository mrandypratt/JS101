function getRandomAge() {
  return Math.floor((Math.random() * 100) + 20);
}

let age;
for (let i = 0; i < 10000; i++) {
  age = getRandomAge();
  if (age > 120 || age < 20) {
    console.log(`Age: ${age}`)
  }
}
console.log("Done!")