/*

Problem:
-Sort an array in place using bubble sort algorithm
-Bubble Sort:
  -iterate through array
    -if value1 > value2 then swapped
    -if no swaps, array is sorted
-Assumptions: array contains two or more elements

INPUT: array
OUTPUT: none; array is changed in place

Data Structure:
-Array

Algorithm:
-Accept arr as argument
-Loop until no swaps:
  -Loop over array;
    -if value1 > value2 => value2, value1


*/

function bubbleSort(arr) {
  let dummy;
  let noSwaps;
  do {
    noSwaps = true;
    for (let element = 0; element < arr.length - 1; element ++) {
      if (arr[element] > arr[element + 1]) {
        dummy = arr[element];
        arr[element] = arr[element + 1];
        arr[element + 1] = dummy;
        noSwaps = false;
      }
    }
  } while (!noSwaps)
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
