const arr = [4, 9, 22, 3, 10];

// forEach
// normal
arr.forEach((item) => console.log(item));

// polyfill
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

arr.myForEach((item) => console.log(item));
