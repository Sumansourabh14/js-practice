// variables and hoisting

// console.log(c);

// var a = 5;

// function b() {
//   console.log("normal function");
// }

// var c = () => {
//   console.log("arrow function");
// };

// -------------------------------------------

// Variable shadowing
var n = 5; // Outer variable
function a() {
  let n = 10; // Inner variable that shadows the outer one
  console.log(n); // 10 (inner n is used here)
}
// a();
// console.log(n);

function shadowing1() {
  var a = 10;

  if (true) {
    var a = 100;
    console.log(a);
  }

  console.log(a);
}

// shadowing1();

// -------------------------------------------

{
  // console.log(aa);
  let aa = 10;
}

// -------------------------------------------

function bc() {
  console.log(a, b, c);

  let a = 1;
  const b = 2;
  var c = 3;
}

// bc();

// -------------------------------------------

const arr = [2, 5, 6];
arr[22] = 10;
// console.log(arr.length);

const { 2: m } = [5, 9, 5, 6];
// console.log(m);

// -------------------------------------------
// Factory functions
function abc(name) {
  const obj = { name };
  return obj;
}

const val = abc("Virtus");
console.log(val);
