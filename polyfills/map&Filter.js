const arr = [4, 9, 22, 3, 10];

// map
Array.prototype.myMap = function (callback, thisArg) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      output.push(callback.call(thisArg, this[i], i, this));
    }
  }
  return output;
};

const myMapOutput = arr.myMap((item) => item * 2);
console.log({ myMapOutput });

// filter
Array.prototype.myFilter = function (callback, thisArg) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        output.push(this[i]);
      }
    }
  }
  return output;
};

const myFilterOutput = arr.myFilter((item) => item > 10);
console.log({ myFilterOutput });
