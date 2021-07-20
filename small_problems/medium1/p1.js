/*

Problem:
-Take an Input array and... 
-Validate Input:
  -If not array => return undefined
  -If empty array => return empty array
-Move first element to the end of the array without modifying the original array
-Return new array

Implicit Rules:
-Index zero is moved to end of array
-All other indexes are moved forward (1 => 0, 2 => 1, etc)
-Nested objects are treated as any other values
-Single element array is returned as is

Data Structures:
-Array => New Array

Algorithm:
-Accept arr as argument
-Input Validate:
  -If not array => return undefined
  -If empty array => return empty array
  -If single element => return copy of array
-Extract first element into new array (non-destructive)
-Extract remaining elements into new array (non-destructive)
-Concatenate so that first element is at end of new array
-Return new array

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  return arr.slice(1).concat(arr[0]);
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]