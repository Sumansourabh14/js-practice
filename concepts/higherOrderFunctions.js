const arr = [5, 1, 30, 2, 6];

//max

function normalMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(normalMax(arr));

const reduceMax = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// console.log(reduceMax);

//
const people = [
  {
    firstName: "akshay",
    lastName: "saini",
    age: 26,
  },
  {
    firstName: "donald",
    lastName: "trump",
    age: 75,
  },
  {
    firstName: "elon",
    lastName: "musk",
    age: 50,
  },
  {
    firstName: "deepika",
    lastName: "padukone",
    age: 26,
  },
];

// group into ages
// output: [{26: 2}, {75: 1}, {50: 1}]

const ageGroups = people.reduce((acc, curr) => {
  console.log({ acc }, acc[curr.age], curr.age);
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log({ ageGroups });

//
const peopleAgeLessThan30 = people
  .filter((item) => item.age < 30)
  .map((item) => item.firstName);

// console.log(peopleAgeLessThan30);

// above solution with reduce
const peopleAgeLessThan30Reduce = people.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

// console.log(peopleAgeLessThan30Reduce);
