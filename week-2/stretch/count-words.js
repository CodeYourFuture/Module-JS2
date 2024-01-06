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
function countWords(inputString) {
    // Remove punctuation and convert the string to lowercase
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
  
    // Split the cleaned string into words
    const words = cleanedString.split(' ');
  
    const wordCount = {};
  
    // Iterate through the words and count their occurrences
    for (const word of words) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    return wordCount;
  }
  
  // Example usage:
  const inputString = "you and me and you";
  const result = countWords(inputString);
  console.log(result); // { you: 2, and: 2, me: 1 }
  