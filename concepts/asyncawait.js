async function resolvePromises() {
  console.log("START");

  const res1 = await p1;
  console.log({ res1 });
  console.log("1st Promise resolved");

  const res2 = await p2;
  console.log({ res2 });
  console.log("2nd Promise resolved");

  console.log("END");
}

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1");
//   }, 20000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2");
//   }, 10000);
// });

// resolvePromises();

async function fetchGitHubUser() {
  try {
    console.log("START");
    const res = await fetch("https://api.github.com/users/sumansourabh14");
    const data = await res.json();
    console.log({ data });
  } catch (error) {
    console.error(error);
  } finally {
    console.log("END");
  }
}

fetchGitHubUser();
