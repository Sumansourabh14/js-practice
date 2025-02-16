// shallow copy & deep copy
// objects don't get copied. The new obj variable points to the object.

const obj = {
  name: "Verna",
};

var obj2 = obj;

console.log(obj, obj2);

obj2.name = "Slavia";

console.log(obj, obj2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// this is how we copy an object
const oldObj1 = {
  name: "Virtus",
};

const newObj1 = { ...oldObj1 };

newObj1.name = "City";

console.log(oldObj1, newObj1);

// but this creates issue when dealing with nested objects

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SHALLOW COPY
const oldObj2 = {
  name: "Virtus",
  stats: {
    speed: {
      max: 195,
      units: "kmph",
    },
  },
};

const newObj2 = { ...oldObj2 };

newObj2.name = "City";
newObj2.stats.speed = 180;

console.log(oldObj2, newObj2); // both are same

// here, for both objects, the value of speed changed which is present inside the nested object
// this is SHALLOW COPY
// Using spread operator or Object.assign

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DEEP COPY
// Use JSON methods. (DO NOT use in interviews)
const oldObj3 = {
  name: "Virtus",
  stats: {
    speed: {
      max: 195,
      units: "kmph",
    },
  },
};

const strOldObj3 = JSON.stringify(oldObj3); // cannot point to the reference now because this is a string
const newObj3 = JSON.parse(strOldObj3);

newObj3.name = "City";
newObj3.stats.speed = 180;

console.log(oldObj3, newObj3); // both are different now

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DEEP COPY for interviews
function makeDeepCopy(obj) {
  // check if input is an object
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // create blank array/object
  const copiedVal = Array.isArray(obj) ? [] : {};

  // recursion
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }

  return copiedVal;
}

const afterDeepCopyObj = makeDeepCopy(oldObj3);
console.log({ afterDeepCopyObj, oldObj3 });

afterDeepCopyObj.name = "Octavia";
console.log({ afterDeepCopyObj, oldObj3 }); // both are NOT same, so deep copy works
