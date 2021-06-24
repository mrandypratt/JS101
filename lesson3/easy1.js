//Question 1
let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(`Question 1: ${numbers}`);

//Bonus
numbers = [1, 2, 3];
numbers[6] = 5;
console.log(`Question 1 (Bonus): ${numbers[4]}`);

//Question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclamation(str) {
  if (str.endsWith('!')) {
    console.log(`Question 2: ${str} ends with Exclamation`);
  } else {
    console.log(`Question 2: ${str} does not end with Exclamation`);
  }
}
endsWithExclamation(str1);
endsWithExclamation(str2);

//Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(`Question 3: Does Spot Exist? ${Object.keys(ages).includes('Spot')}`);

//Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription = munstersDescription.toLowerCase();
munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.substring(1);
console.log( `Question 4: First Letter Capital: ${munstersDescription}`);

//Question 5
console.log(`Question 5: false == '0' => ${false == '0'}`);
console.log(`Question 5: false === '0' => ${false === '0'}`);

//Question 6
let munsterAges = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

for (let key in additionalAges) {
  munsterAges[key] = additionalAges[key];
}

//Could hav used Object.assign(ages, additionalAges);

console.log(`Question 6: Expanded Object: ${Object.entries(munsterAges)}`);

//Question 7
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function containsDino(str) {
  console.log(`Question 7: "${str}" Contain Dino => ${str.includes('Dino')}`);
}

containsDino(str1);
containsDino(str2);

//Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
console.log(`Question 8: Added Dino => ${flintstones.concat('Dino')}`);

//Question 9
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
console.log(`Question 9: Added Dino => ${flintstones.concat(['Dino', 'Hoppy'])}`);

//Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(`Question 10: ${advice.substring(0, advice.indexOf("house"))}`);

// Expected return value:
// => 'Few things in life are as important as '