let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let fruitColorVegSize = [];

function capFirstLetter(word) {
  let letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('')
}

for (let item in obj) {
  if (obj[item].type === 'fruit') {
    fruitColorVegSize.push(obj[item].colors.map(color => {
      return capFirstLetter(color);
    }))
  } else if (obj[item].type === 'vegetable') {
    fruitColorVegSize.push(obj[item].size.toUpperCase())
  }
}

console.log(fruitColorVegSize)
