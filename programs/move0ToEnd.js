// Move all the zeroes inside an array to the end!

// normal
const moveZeroesToEnd = (arr) => {
  const newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    newArr.push(0);
  }
  return newArr;
};

console.log(moveZeroesToEnd([8, 5, 0, 10, 0]));

// optimized
const moveZeroesToEndOptimized = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }

  return arr;
};

console.log(moveZeroesToEndOptimized([8, 5, 0, 10, 0]));
