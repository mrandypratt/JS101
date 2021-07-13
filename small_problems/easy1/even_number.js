for (let i = 2; i < 100; i++) {
  //skip evens
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i)
}

//Alternative
let counter = 2
while (counter < 100) {
  console.log(counter);
  counter +=2;
}