// use Recursion
// https://dev.to/dey24/flattening-a-deeply-nested-object-a-step-by-step-guide-163g

let user = {
  name: "Chiranjit",
  address: {
    personal: {
      city: "Kolkata",
      state: "West Bengal",
    },
    office: {
      city: "Bengaluru",
      state: "Karnataka",
      area: {
        landmark: "Waterside",
        post: 433101,
      },
    },
  },
};

const result = {};

const flattenObject = (obj, parentKey) => {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      flattenObject(obj[key], `${parentKey}_${key}`);
    } else {
      result[`${parentKey}_${key}`] = obj[key];
    }
  }
  return result;
};

console.log(flattenObject(user, "user"));
