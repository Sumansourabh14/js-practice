function findDuplicateItemsInArray(arr) {
  const duplicateItems = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicateItems.includes(arr[i])) {
        duplicateItems.push(arr[i]);
      }
    }
  }

  return duplicateItems;
}

console.log(findDuplicateItemsInArray([1, 2, 8, 2, 9, 8, 4, 4, 9, 10, 11, 11]));
