function printWithSpaces(string, reps) {
  for (let i = 0; i < reps; i++) {
    console.log(`${" ".repeat(i)}${string}`);
  }
}

printWithSpaces('Hello', 8);