const readline = require('readline-sync');

let name = readline.prompt('What is your name? ');

if (!name.includes('!')) {
  console.log(`Hello ${name}`);
} else {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE YELLING?`);
}
