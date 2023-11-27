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
  let obj = {};
   const word = str.replace(/[.,!?]/g,'').toLowerCase();
   const wordArray= word.split(' ');
   
   const setOfWordArray = new Set(wordArray);
  //  console.log(word, wordArray,setOfWordArray);
  //  for(const items of setOfWordArray){
  //   let wordsCount = 0;
  //   for(const elements of wordArray){
  //     if(items === elements){
  //       wordsCount++;
  //     }
    
  //   }
  //   if(items.length>0){
  //     obj[items] = wordsCount;

  //   }
      
  //  }
  const arr =[];
  for(const items of setOfWordArray){
    
    if(items.length>0){
      let key = items;
      let value = wordArray.filter(element => element === items).length;
      arr.push([key,value]);
    }
  }
  
  const sortedArr = arr.sort((a , b)=> b[1] - a[1]);
  for(const [i,j] of sortedArr){
    obj[i]= j;
  }
   return obj;
}
console.log(countWords('me and you you and me and you with ?'))

module.exports = countWords;
