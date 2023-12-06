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
function countWords(inputText) {
  //Removing punctuations and Converting to lowercase
  const cleanString = inputText
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .toLowerCase();

  //Splitting the string into an array of words
  const wordsArray = cleanString.split(" ");

  //Creating an object to store word counted Words
  const wordCount = {};

  //Looping through the words and count occurrences
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    //Checking if the word is already in the count object
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}

console.log(countWords("COde code ,coDE CODe ,your future ... your !!!"));
