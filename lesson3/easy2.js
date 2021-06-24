//Question 1

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(`Question 1: ${advice.replaceAll("important", "urgent")}`);

//Question 2

console.log(`Question 2: ${}`);

//Question 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(`Question 3: Num 1: ${numbers.includes(number1)}`);
console.log(`Question 3: Num 2: ${numbers.includes(number2)}`);

//Question 4
let famousWords = "seven years ago...";
console.log(`Question 4: ${'four score and ' + famounsWords}`);
console.log(`Question 4: ${`four score and ${famousWords}`}`);

//Question 5
numbers = [1, 2, 3, 4, 5];
console.log(`Question 5: ${numbers.splice(2, 1)}`);

//Question 6
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(`Question 6: ${flintstones.flat()}`);

//Question 7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(`Question 7: ${Object.entries(flintstones)[2]}`);

//Question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(`Question 8: Numbers: ${Array.isArray(numbers)}, Table: ${Array.isArray(table)}`);

//Question 9

console.log(`Question 9: ${}`);

//Question 10

console.log(`Question 10: ${}`);