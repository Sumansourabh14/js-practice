// Display the Fibonacci sequence up to n-th term

// using while loop
// Big-O = O(n)
function fibonacciElements(n) {
  // 5 => 0, 1, 1, 2, 3
  // 8 => 0, 1, 1, 2, 3, 5, 8, 13
  let i = 1;
  let elements = [];
  let prev = 0;
  let present = 1;
  let next = 0;

  elements.push(prev);

  while (i < n) {
    prev = present;
    present = next;
    next = prev + present;
    elements.push(next);

    i++;
  }

  return elements;
}

console.log(fibonacciElements(2));
console.log(fibonacciElements(3));
console.log(fibonacciElements(7));

// using for loop
// Big-O = O(n)
function fibonacciSequence(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(7));
