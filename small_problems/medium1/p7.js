/*

In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Problem:
-Accept integer as number of times to do fibanacci algorithm
-Return fibanacci number 

Examples:
-f(1) => 1
-f(2) => 1
-f(3) => 1 + 1
-f(4) => 1 + 2
-f(5) => 2 + 3

Data Structure:
-Integer for times to repeat
-Variables for keeping track of iteration

Algorithm:
-if n is one or two, return 1
-initialize three variables for tracking the numbers:
  -oldNum = 1
  -newNum = 1
  -fib;
-loop for n - 2 times starting
  -fib = oldNum + newNum
  -oldNum = newNum
  -newNum = fib;
-return fib


*/

function fibonacci(numOfTimes) {
  let previousTwo = [1, 1];
  for (let i = 2; i < numOfTimes; i++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }
  return previousTwo[1];
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050