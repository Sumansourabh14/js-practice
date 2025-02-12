const res = document.querySelector("#res");
const rej = document.querySelector("#rej");

let promise = new Promise((resolve, reject) => {
  res.addEventListener("click", () => {
    resolve("resolve");
  });
  rej.addEventListener("click", () => {
    reject("reject");
  });
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

async function s() {
  await promise;
  return "Promise---";
}

// console.log(s());

async function f() {
  return 4;
}

const res1 = f();
console.log(res1);
