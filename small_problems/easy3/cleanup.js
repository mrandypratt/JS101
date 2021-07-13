function cleanUp(string) {
  string = string.replaceAll(/\W/g, ' ')
  string = string.replaceAll(/\s+/g, ' ');

  return string;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "