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

function palindromes(string) {
  let allSubstrings = substrings(string);
  let palindromes = allSubstrings.filter(substring => {
    return (substring === substring.split('').reverse().join('') && substring.length > 1);
  });
  return palindromes;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
