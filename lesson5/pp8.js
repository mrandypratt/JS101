let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
let vowels = [];

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(letter => {
      if (VOWELS.includes(letter)) {
        vowels.push(letter);
      }
    })
  })
});

console.log(vowels)
