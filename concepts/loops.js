const arr = ["Virtus", "Slavia", "Kushaq"];
// console.log({ arr });

console.log("---");

for (let i in arr) {
  console.log(arr[i]);
}

console.log("---");

for (let i of arr) {
  console.log(i);
}
