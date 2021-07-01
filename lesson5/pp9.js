let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderedArr = arr.map(subarray => {
  if (typeof subarray[0] === 'string'){
    return subarray.slice().sort()
  } else {
    return subarray.slice().sort((a, b) => Number(a) - Number(b))
  }
})

console.log(orderedArr)
console.log(arr)
