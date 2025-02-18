// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const obj11 = {
  a: 5,
  b: {
    c: 6,
  },
};

const obj12 = Object.assign({}, obj11);
const obj13 = { ...obj11 };

console.log({ obj11, obj12, obj13 });

obj11.b.c = 8;

console.log({ obj11, obj12, obj13 });
console.log(Object.assign({}, obj11, obj12, obj13));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Employee(id, name) {
  this.empId = id;
  this.empName = name;
}

function Manager(id, name, department) {
  Employee.call(this, id, name);
  this.dept = department;
}

var newManager = new Manager(34, "Alex Smith", "Sales");
console.log(newManager.empId); // What is the output of this line?

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var truthyString = "true";
var truthyNumber = 1;

var stringObject = new String(truthyString);
var numberObject = new Number(truthyNumber);

console.log(stringObject === truthyString);
console.log(numberObject === truthyNumber);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var obj0 = { hasOwnProperty: 1, foo: 2 };
obj0.hasOwnProperty("foo");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getMysticNumbers() {
  var numbers = [];
  for (var i = 1; i <= 10; i++) {
    numbers[i] = function () {
      return i * 2;
    };
  }
  return numbers;
}

var mysticNumbers = getMysticNumbers();

console.log(mysticNumbers[5]());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
