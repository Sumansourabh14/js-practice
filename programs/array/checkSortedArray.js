// Brute forced approach
function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isArraySorted([1, 2, 3, 10, 5]));
console.log(isArraySorted([1, 2, 3, 4, 5]));
console.log(isArraySorted([5, 4, 3, 2, 1]));
