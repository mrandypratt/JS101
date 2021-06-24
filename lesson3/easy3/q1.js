//Option 1
let numbers = [1, 2, 3, 4];
for (let i = numbers.length; i > 0; i--) {
  numbers.pop();
} 
console.log(numbers);

//Option 2
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

//Option 3
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);
