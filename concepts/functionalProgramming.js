const radiusArray = [3, 1, 2, 4];

const calcArea = (radius) => Math.PI * Math.pow(radius, 2);

const calcCircumference = (radius) => 2 * Math.PI * radius;

const calcDiameter = (radius) => radius * 2;

const calc = (func, radiusArr) => {
  let output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(func(radiusArr[i]));
  }
  return output;
};

console.log(calc(calcArea, radiusArray));
console.log(calc(calcCircumference, radiusArray));
console.log(calc(calcDiameter, radiusArray));

console.log(radiusArray.map((i) => i.toString(2))); // convert to binary form
