// 1. with closure
function outer(x) {
  return function inner(y) {
    console.log(x + y);
  };
}

outer(2)(6);

// 2. with bind method
function addition(x, y) {
  console.log(x + y);
}

const additionBy4 = addition.bind(this, 2);
additionBy4(10);
