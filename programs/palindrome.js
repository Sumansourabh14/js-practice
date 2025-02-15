// A palindrome number is a number that reads the same forward and backward. In other words, if you reverse the digits of the number, it remains unchanged.
// Example: 121 → reversed is 121

// Big-O = O(log n)
function isPalindromeNumber(n) {
  if (n < 0) {
    return false;
  }

  if (n < 10) {
    return true;
  }

  let originalNumber = n;
  let reverseNumber = 0;

  while (n !== 0) {
    let r = n % 10;
    reverseNumber = reverseNumber * 10 + r;
    n = Math.floor(n / 10);
  }

  if (originalNumber === reverseNumber) {
    return true;
  }

  return false;
}

console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(456));
console.log(isPalindromeNumber(6));
