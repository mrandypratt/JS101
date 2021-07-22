/*

A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Problem:
- Classify a triangle as one of the following 4:
  -invalid: Either...
    -sum of degrees !== 180
    -any angle is 0 or less
    -Angle is not an integer (assumed integer for this problem)
  -right:
    -is valid
    -one angle === 90
  -acute
    -is valid
    -all angles < 90
  -obtuse
    -is valid
    -One Angle > 90

INPUT: 3 integers
OUTPUT: String: one of four types of triangle


Data Structure:
-3 integers => array => return string

Algorithm:
-Accept 3 integers as arguments
-Store integers in array
-Check if invalid:
-Check if right
-Check if obtuse
-Check if acute
-Return correct classification

*/

function triangle(int1, int2, int3) {
  let angles = [int1, int2, int3];
  if (angles.reduce((acc, curr) => acc + curr) !== 180) return 'invalid';
  if (angles.filter(angle => angle <= 0).length) return 'invalid';
  let classification = 'acute';
  angles.forEach(angle => {
    if (angle > 90) classification = 'obtuse';
    if (angle === 90) classification = 'right';
  });
  return classification;
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"