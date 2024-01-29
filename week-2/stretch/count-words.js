/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the chapter
*/

function countWords(str) {
  const words = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase();
  const wordList = words.split(" ");
  const newObj = {};
  for (let word of wordList) {
    if (newObj.hasOwnProperty(word)) {
      newObj[word]++;
    } else {
      newObj[word] = 1;
    }
  }
  delete newObj[""];
  return newObj;
}
