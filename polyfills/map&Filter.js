const arr = [4, 9, 22, 3, 10];

// map
Array.prototype.myMap = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }
  return output;
};

const myMapOutput = arr.myMap((item) => item * 2);
console.log({ myMapOutput });

// filter
Array.prototype.myFilter = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      callback(array.push(this[i]));
    }
  }
  return output;
};

const myFilterOutput = arr.filter((item) => item > 10);
console.log({ myFilterOutput });
