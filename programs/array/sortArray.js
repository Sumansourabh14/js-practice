function sortArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(sortArray([8, 10, 2, 55, 9]));
