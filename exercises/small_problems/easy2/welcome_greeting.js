function greetings(names, credentials) {
  return `Hello, ${names.join(' ')}! Nice to have a ${credentials.title} ${
    credentials.occupation
  } around!`;
}

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
