for (let i = 1; i < 100; i++) {
  //skip evens
  if (i % 2 === 0) {
    continue;
  }
  console.log(i)
}

//Alternative
let counter = 1
while (counter < 100) {
  console.log(counter);
  counter +=2;
}