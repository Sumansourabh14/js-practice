// Time Complexity => O(n)
function linearSearch(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return `${n} is present in the ${i} index`;
    }
  }
  return -1;
}

console.log(linearSearch(6, [8, 2, 4, 55, 6, 10]));
console.log(linearSearch(99, [8, 2, 4, 55, 6, 10]));
