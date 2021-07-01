let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

let orderedArr = arr.map(subarray => {
  if (typeof subarray[0] === 'string'){
    return subarray.slice().sort((a, b) => compare(a, b))
  } else {
    return subarray.slice().sort((a, b) => Number(b) - Number(a))
  }
})

console.log(orderedArr)
console.log(arr)
