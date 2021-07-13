function buyFruit(groceryList) {
  let newListFormat = [];
  groceryList.forEach(itemCountPair => {
    for (let i = 0; i < itemCountPair[1]; i++) {
      newListFormat.push(itemCountPair[0]);
    }
  });
  return newListFormat;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
