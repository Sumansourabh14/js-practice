const arr = [2, 5, "string", 88, "AB"];
const str = "first";

// reverse array
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr);
}

reverseArray(arr);

// reverse string
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  console.log(reversedStr);
}

reverseString(str);

// reverse the string but NOT the order of words
function reverseWords(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word = str[i] + word; // if it is a letter
    } else {
      result += word + " "; // Add reversed word and space to result
      word = ""; // Reset word for the next word
    }
  }

  result += word; // Add the last word (since no space follows it)
  return result;
}

console.log(reverseWords("this is something")); // Output: "olleH dlroW"

// reverse number
function reverseNumber(num) {
  if (typeof num === "string") return "num cannot be a string";
  if (num >= 0 && num < 10) {
    return num;
  }

  let reverseNumber = 0;

  while (num != 0) {
    let r = num % 10;
    reverseNumber = reverseNumber * 10 + r;
    num = Math.floor(num / 10);
  }

  return reverseNumber;
}
console.log(reverseNumber(1456));
