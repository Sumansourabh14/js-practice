// https://youtu.be/AOPmqw9scfc?si=KoOAJBNVldxs-Zqv

const obj1 = {
  name: "Messi",
  getName: function () {
    console.log(this.name);
  },
};

console.log(obj1);

const obj2 = Object.create(obj1);

console.log(obj2.__proto__);
