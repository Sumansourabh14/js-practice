// determine if a natural number > 1 is prime or not
// 1 is neither prime nor a componsite number

// 2 => true
// 21 => false
// 14 => false

// Big-O = O(n)
function isPrime(n) {
  let count = 0;

  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return true;
  }

  return false;
}

// console.log(isPrime(6));

// alternative
// Big-O = O(n)
function isPrimeNumber(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrimeNumber(7));

// determine which numbers are prime upto a number 'n'
function primeNumbers(n) {
  let result = [];

  for (let i = 1; i < n; i++) {
    if (isPrimeNumber(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(primeNumbers(7));
