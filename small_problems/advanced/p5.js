/*


Your solution should not mutate the input arrays.

Problem:
-Take two sorted arrays and consolidate into new sorted array
-No use of Sort, add one at a time
-Do not Mutate Original arrays

Assumptions:
-two arrays will always be provided
-Arrays will only contain numbers
-Arrays may be empty
-Both arrays will not empty

INPUT: 2 Arrays of sorted numbers
OUTPUT: one array of sorted numbers

Data Structure:
-Array

Algorithm:
-Accept arr1 and arr2 as arrays of sorted numbers
-create a new array newArr to store consolidated elements
-If either array is empty => return the other array
-create index for each array
-Loop
  -if index is out of reach for either array, push the remaining values of other arry to new array
  -if arr1 value at index1 is less than or equal to arr2 value at index2 
    -add arr1[index1] to newArr
    -increment index1
  -if arr2 value at index2 is less than arr2[index2]
    -add to new arr
    -increment index2
  -end loop if (newArr.length === arr1.length + arr2.length)
  
-return newArr

*/

function merge(arr1, arr2) {
  let newArr = [];
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;
  let index1 = 0;
  let index2 = 0;

  do {
    if (arr1[index1] === undefined) {
      newArr.push(arr2[index2]);
    } else if (arr2[index2] === undefined) {
      newArr.push(arr1[index1]);
    } else if (arr1[index1] <= arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else {
      newArr.push(arr2[index2]);
      index2++;
    }
  } while (newArr.length < arr2.length + arr1.length)

  return newArr;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]