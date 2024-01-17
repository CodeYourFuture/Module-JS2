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
function countWords(words) {
  const count = {};
  const wordSplit = words.split(" ");
  const lower = wordSplit.map(word => word.toLowerCase());

  for (let i = 0; i < wordSplit.length; i++) {
    const element = lower[i];
    const leng = element.length;

    if (element[leng - 1] == "." || element[leng - 1] == "," || element[leng - 1] == "!" || element[leng - 1] == "?") {
      const le = element.length - 1;
      const nu = element.substring(0, le);

      count[nu] = (count[nu] || 0) + 1;
    } else {
      count[element] = (count[element] || 0) + 1;
    }
  }
const sortedKey = Object.keys(count).sort((a, b) => count[b] - count[a]);
const sortCount ={};
for(const key of sortedKey){
sortCount[key]=count[key];

}

  return sortCount;
}
console.log(countWords("hello world how are you are you doing fine HELLO hello?"));