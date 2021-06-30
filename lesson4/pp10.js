let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let lowestAge = Infinity;

for (let age in ages) {
  let currentAge = ages[age];
  if (currentAge < lowestAge) {
    lowestAge = currentAge;
  }
}

console.log(lowestAge);