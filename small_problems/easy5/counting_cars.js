let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

function countOccurrences(array) {
  let occurances = {};
  vehicles.forEach(vehicle => {
    if (!occurances[vehicle]) {
      occurances[vehicle] = 1;
    } else {
      occurances[vehicle] += 1;
    }
  })
  return occurances;
}

console.log(countOccurrences(vehicles));

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/