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

function countWords(string) {
  // first logic
  /* const wordsArray = string
    .split('')
    .filter((word) => {
      return word.search(/^[a-zA-Z0-9\s]+$/) != -1
    })
    .join('')
    .toLowerCase()
    .split(' ') */

  // second logic (less support due match() method)
  const wordsArray = string
    .toLowerCase()
    .match(/[a-zA-Z0-9]+/g) || []; /* return an words array with just alphanumerical characters, searching the entire string /g */

  let result = wordsArray.reduce((object, word) => {
    // !object.hasOwnProperty(word) ? object[word] = 1 : object[word]++;
    object[word] = (object[word] || 0) + 1; /* ChatGPT suggestion */
    return object;
  }, {});

  return result;
}


module.exports = countWords;