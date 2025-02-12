// this

// global space
console.log(this); // global object (Window) - Inside browser | Node.js - global (NO WINDOW on Node.js environment)

// inside normal function
function normalThis() {
  console.log(this);
}

// inside arrow function
const arrowFun = () => {
  console.log(this);
};

arrowFun();
