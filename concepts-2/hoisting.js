// function sum(x) {
//   return function b(y) {
//     return function c(z) {
//       return x + y + z;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

// const sum1 = (a) => (b) => b ? sum1(a + b) : a;

// console.log(sum1(1)(2)(3)(4)());

let x = 5;

function test(val = x) {
  let x = 10;
  console.log(val);
}

test();
