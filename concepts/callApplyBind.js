const obj = {
  name: "Messi",
  x: function (nickname) {
    console.log(this.name + " " + nickname);
  },
};

const obj2 = {
  name: "Ronaldo",
};

// function borrowing
obj.x.call(obj2, "CR7");
obj.x.apply(obj2, ["CR7"]);

// make copy of a function
const y = obj.x.bind(obj2, "CR7");
y();
