/*

// Yellow pages list of business names data:
let yellowPages = ['Apple Store',
                   'Bags Galore',
                   'Bike Store',
                   'Donuts R Us',
                   'Eat a Lot',
                   'Good Food',
                   'Pasta Place',
                   'Pizzeria',
                   'Tiki Lounge',
                   'Zooper'];

With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
If the middle value is equal to 'Pizzeria', stop the search.
If the middle value is less than 'Pizzeria':
Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.
Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Problem:
-Given a sorted array, use binary search to identify if an item is in the array 

Assumptions:
-Array is sorted
-Target Value must match the same data type as it has in the array

INPUT: Array of values, target value
OUTPUT: Integer (Index or targetValue or -1)

Data Structure:
-Array

Algorithm:
-Accept arr as sorted array of values and targetValue
-if (targetValue === middleElement) return index
-else if (targetValue < middleElement) search first half
-else if (targetValue > middleElement) search second half

Was able to recursively find the item, but unable to bring back index without using Array.prototype.find().
*/

function binarySearch(arr, target) {
  let index = (Math.floor(arr.length / 2));
  // console.log(arr, index, arr[index], target, arr[index] < target)
  if (target === arr[index]) {
    console.log("Target " + target + "Found")
    return index;
  } else if (target < arr[index]) {
    console.log("Target Smaller")
    if (arr.length === 1) return -1;
    return binarySearch(arr.slice(0, index), target);
  } else if (target > arr[index]) {
    console.log("Target Bigger")
    if (arr.length === 1) return -1;
    return binarySearch(arr.slice(index + 1), target);
  } else {
    return -1;
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6