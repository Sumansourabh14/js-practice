// Closure

function z() {
  var b = 700;
  var d = 10;
  return function x() {
    var a = 10;
    return function y() {
      console.log(a, b);
    };
  };
}

// z()()();

function runTimeout(timeout) {
  var i = 5;
  setTimeout(() => {
    console.log(i);
  }, timeout);
}

// runTimeout(3000);

// for (var i = 0; i < 5; i++) {
//   console.log({ i });
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   console.log({ i });

//   function close(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   close(i);
// }

// Usage of Closure

// - Module patterns
// - Currying
// - Memoize, Once functions

// Pros of Closure
// - Data hiding and encapsulation

// Cons of Closure
// - Consumes lot of memory
// - No garbage collection (variables are not garbage collected)

function counter() {
  let count = 0;
  document.getElementById("counter").addEventListener("click", () => {
    count++;
    console.log("count", count);
  });
}

counter();

// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

function outer() {
  var b = 10;
  var c = 100;
  function inner() {
    var a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner;
}
var X = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time
