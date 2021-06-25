function logInBox(string) {
  let dashes = "";
  let spaces = ''
  for (let i = 0; i < string.length; i++) {
    dashes += '-';
    spaces += ' ';
  }

  console.log(`+-${dashes}-+`);
  console.log(`| ${spaces} |`);
  console.log(`| ${string} |`);
  console.log(`| ${spaces} |`);
  console.log(`+-${dashes}-+`);
}

logInBox('To boldly go where no one has gone before.');