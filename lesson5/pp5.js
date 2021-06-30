let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.entries(munsters);
let maleAges = munstersArray.map(member => {
  if (member[1]["gender"] === 'male') {
    return member[1]['age'];
  } else {
    return 0;
  }
})

let totalMaleAges = maleAges.reduce((age, total) => age + total);

console.log(totalMaleAges);