// this - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
"use strict";

// global space
console.log("GLOBAL SPACE");

console.log(this); // global object (window) - Inside browser | Node.js - global (NO WINDOW on Node.js environment)

//-----------------------------------------------------------------------

// NORMAL FUNCTION
console.log("NORMAL FUNCTION");

function normalThis() {
  console.log(this);
}

// EXPLANATION
// in a normal function, value of 'this' is undefined in strict mode
// But because of 'this substitution', undefined becomes window object on non-strict mode

// normal mode - window
// strict mode - undefined

// value of this depends on how the function is called...

normalThis(); // undefined
window.normalThis(); // window

//-----------------------------------------------------------------------

// OBJECT
console.log("OBJECT");

const student = {
  name: "Messi",
  printName: function () {
    console.log(this);
    console.log(this.name);
  },
};

student.printName(); // the current object

//-----------------------------------------------------------------------

// CALL, APPLY, BIND METHODS (SHARING METHODS)
console.log("CALL, APPLY, BIND METHODS (SHARING METHODS)");

const student2 = {
  name: "Ronaldo",
};

student.printName.call(student2); // value of this - student2
//-----------------------------------------------------------------------

// ARROW FUNCTION
console.log("ARROW FUNCTION");

// Example 1
const arrowFun = () => {
  console.log(this);
};

arrowFun(); // window

// Example 2
// arrow inside an object
const obj = {
  a: 4,
  y: () => {
    console.log(this);
  },
};

obj.y(); // window

// Example 3
// arrow function nested inside a function
const obj2 = {
  a: 4,
  y: function () {
    const z = () => {
      console.log(this);
    };
    z();
  },
};

obj2.y(); // current object (obj2)

// no this value - take the value of this from the enclosing lexical environment

//-----------------------------------------------------------------------

// DOM
console.log("DOM");

// this - reference to HTML element
