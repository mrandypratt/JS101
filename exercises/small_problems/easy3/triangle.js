function getSpaces(currentRow, totalRows) {
  if (currentRow === totalRows) return "";
  let numOfSpaces = totalRows - currentRow;
  let spaces = ''
  for (let i = 0; i < numOfSpaces; i++) {
    spaces += " ";
  }
  return spaces;
}

function getStars(currentRow) {
  let stars = ''
  for (let i = 0; i < currentRow; i++) {
    stars += "*";
  }
  return stars;
}

function triangle(rows) {
  let spaces;
  let stars;
  for (let i = 0; i < rows; i++) {
    spaces = getSpaces(i, rows);
    stars = getStars(i);
    console.log(spaces + stars);
  }
}

triangle(5);

triangle(9);
