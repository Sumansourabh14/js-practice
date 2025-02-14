const obj = {
  name: "Messi",
  x: function (nickname) {
    console.log(this.name + " " + nickname);
  },
};

const obj2 = {
  name: "Ronaldo",
};

obj.x.call(obj2, "CR7");
obj.x.apply(obj2, ["CR7"]);

const y = obj.x.bind(obj2, "CR7");
y();
