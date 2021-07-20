/*


Inputs: 3 integers
Outputs: One of 4 strings

Problem:
-Determine if 3 integers make a valid triangle 
  -if not return 'invalid'
-Determine which of 3 triangle classes the 3 integers belong to and return

Rules:
-Explicits:
  -An invalid Triangle: 
    -longest side is greater than sum of other two
    -Every integer must be greater tahn zero
  -Triangle Classes:
    -Equilateral: side1 === side2 === side3
    -Isosceles: side1 === side2 !== side3
    -Scalene: side1 !== side2 !== side3
  -Triangle Class return values:
    -'equilateral', 'isosceles', 'scalene', or 'invalid'
-Implicits:
  -Assume input is three integers
  -If valid triangle, then must be one of three classes
  -If all sides are equal, it must be Equilateral
  -If all sides are unequal, it must be Scalene
  -Else Isosceles

Data Structures:
-3 integers => string

Algorithm:
-Check that lengths are positive numbers (each side > 0)
  -if not return 'invalid'
-Check if all sides are equal length
  -if true return 'equalateral'
-Check if Longest side is > sum of other two sides
  -if true, return 'invalid'
-Check if All side are diffent lengths
  if true return 'scalene'
-else return isosceles

*/

function triangle(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) return 'invalid';
  if (side1 === side2 && side2 === side3) return 'equilateral';
  if (side1 + side2 < side3) return 'invalid';
  if (side2 + side3 < side1) return 'invalid';
  if (side3 + side1 < side2) return 'invalid';
  if (side1 !== side2 && side2 !== side3) return 'scalene';
  else return 'isosceles';
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

