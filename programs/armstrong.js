// Armstrong number
// An Armstrong number is a number that is equal to the sum of its digits, each raised to the power of the number of digits. For example, the number 153 is an Armstrong number because 1^3 + 5^3 + 3^3 equals 153

// Big-O = O(log n)
function isArmstrongNumber(n) {
  let originalNumber = n;
  let result = 0;

  while (n !== 0) {
    let lastDigit = n % 10;
    let cube = lastDigit * lastDigit * lastDigit;
    result = result + cube;
    n = Math.floor(n / 10);
  }

  return originalNumber === result;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(222));
