// Count the occurrences of repeated words in a sentence while ignoring a specific banned word. You can use inbuilt functions.Try to solve within two for loop. let sentence = "This is a test sentence and this test is only a test"; let bannedWord = "test"; // (Banned word not printed in Output) Output : Repeated words (excluding banned word "test"): this: 2 is: 2 a: 2

function repeatingWordsCount(str, bannedWord) {
  let arr = str.toLowerCase().split(" ");
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== bannedWord) {
      result[arr[i]] = (result[arr[i]] || 0) + 1;
    }
  }

  for (const word in result) {
    if (result[word] > 1) {
      console.log(`${word}: ${result[word]}`);
    }
  }

  return result;
}

console.log(
  repeatingWordsCount(
    "This is a test sentence and this test is only a test",
    "test"
  )
);
