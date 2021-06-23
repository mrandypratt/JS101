function shortLongShort(str1, str2) {
  let shortString;
  let longString;

  if (str1.length > str2.length) {
    shortString = str2;
    longString = str1;
  } else if (str1.length < str2.length) {
    shortString = str1;
    longString = str2;
  } else {
    return 'Something went wrong!';
  }
  return `${shortString}${longString}${shortString}`;
}

let str1 = 'hello';
let str2 = 'goodbye';
console.log(shortLongShort(str2, str1));
