// find if the given number 'n' is a power of 2 or not
// Big-O = O(logn) => input size (n) reduces by half
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(16));

// Big-O = O(n)
function isPowerOfTwoWithPow(n) {
  for (let i = 0; i < n; i++) {
    let pow = Math.pow(2, i);
    if (pow === n) {
      return true;
    }
  }
  return false;
}

// console.log(isPowerOfTwoWithPow(4));
// console.log(isPowerOfTwoWithPow(9));
// console.log(isPowerOfTwoWithPow(16));
