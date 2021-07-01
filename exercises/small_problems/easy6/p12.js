function isBalanced(string) {
  stringArr = string.split('');
  let counter = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === '(') counter += 1;
    if (stringArr[i] === ')') counter -= 1;
    if (counter < 0) return false;
  }
  if (counter !== 0) return false;
  return true;


  //Close Parenthesis before Open Parenthesis ==> return False;
  //More Close Parenthesis than Open Parenthess ==> return False;
  //Open Parenthesis with no Close Parenthesis
  //More Open Parenthesis than Close Parenthesis
  //Else ==> return True (incl no parenthesis & balanced parenthesis)
}

console.log(isBalanced("What (is) this?")); // === true);
console.log(isBalanced("What is) this?")); // === false);
console.log(isBalanced("What (is this?")); // === false);
console.log(isBalanced("((What) (is this))?")); // === true);
console.log(isBalanced("((What)) (is this))?")); // === false);
console.log(isBalanced("Hey!")); // === true);
console.log(isBalanced(")Hey!(")); // === false);
console.log(isBalanced("What ((is))) up(")); // === false);
