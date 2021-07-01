let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(object => {
  let newObject = {};
  for (let item in object) {
    newObject[item] = object[item] + 1;
  }
  return newObject;
})

console.log(newArr)
console.log(arr)
