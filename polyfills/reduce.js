const arr = [4, 9, 22, 3, 10];

Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  let startIndex;

  if (arguments.length > 1) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const myReduce = arr.myReduce((acc, curr) => acc + curr);
console.log({ myReduce });
