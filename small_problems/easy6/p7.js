function swapName(name) {
  let nameArray = name.split(' ')
  nameArray.unshift(nameArray.pop())
  return nameArray[0] + ', ' + nameArray.slice(1).join(" ");
}

console.log(swapName('Andrew Wilson Pratt')); 
console.log(swapName('John Johnson Doe')); 
console.log(swapName('Julie Moore')); // "Roberts, Joe"
