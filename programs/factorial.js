// factorial of an integer
// 5 => 5 * 4 * 3 * 2 * 1 = 120

// using while loop
// Big-O = O(n)
function factorial(n) {
  let i = n;
  let fact = 1;

  while (i > 0) {
    fact = fact * i;
    i--;
  }

  return fact;
}

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(7));

// using for loop
// Big-O = O(n)
function factorialFor(n) {
  let fact = 1;

  for (let i = n; i > 0; i--) {
    fact = fact * i;
  }

  return fact;
}

console.log(factorialFor(0));
console.log(factorialFor(5));
console.log(factorialFor(7));
