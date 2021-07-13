function substrings(string) {
  let substrings = [];
  let letters = string.split("");
  for (let beginIndex = 0; beginIndex < letters.length; beginIndex++) {
    for (let endIndex = 1; endIndex <= letters.length; endIndex++) {
      if (endIndex <= beginIndex) continue;
      substrings.push(letters.slice(beginIndex, endIndex).join(''));
    }
  }
  return substrings;
}


console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */ 
