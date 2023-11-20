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

// split sentences into words and store in an array.
// store each word in an array as the keys, and store the count occurrences as the value

// function countWords(str){
//   const wordArray = str.split(" ");
//   const wordCountObj = {};

//   for(const item of wordArray){
//     if(wordCountObj[item]){
//       wordCountObj[item] += 1;
//     }else{
//       wordCountObj[item] = 1;
//     }
//   }
//   return wordCountObj;
// }

// let arr = ["You", "and", "me", "and", "me", "and", "you"];
// for (const word of arr) {
//   word.toLowerCase();
// }





const sentence = "You? and, me, .and me= and you, nothing more.";
const sentenceTwo = "You are not a business-owner. What? Who? Who are you? You? Yes, you." 

function countWords(sentence){
  const newSentence = sentence.replace(/[^\w\s]/g, "").toLowerCase();
  const sentenceArray = newSentence.split(" "); //['You', 'and','me',  'and','me','and','you']

  const sentenceObj = {};
  for(const item of sentenceArray){
    if(sentenceObj[item]){
      sentenceObj[item] += 1;
    }
    else{
      sentenceObj[item] = 1;
    }
  }
  const sentenceObjAsArray = Object.entries(sentenceObj);
  const orderedArray = sentenceObjAsArray.sort(function(a,b){
    return b[1]-a[1];
  });

  const sortedWordCountObj = Object.fromEntries(orderedArray);
  
  return sortedWordCountObj;

};

console.log(countWords(sentence));
console.log(countWords(sentenceTwo));



// function objectToArrayAndSort(sentenceObj){
//   const orderedArray = [];
//   for (const word in sentenceObj) {
//     orderedArray.push([word, sentenceObj[word]]);
//   }
//   orderedArray.sort(function (a, b) {
//     return b[1] - a[1];
//   });
// }

// // const orderedArray = [];
// // for (const word in sentenceObj){
// //   orderedArray.push([word,sentenceObj[word]]);
// // }
// // orderedArray.sort(function(a,b){
// //   return b[1] - a[1];
// // })

// function sortObjectByValue(orderedArray){
//   const sortedObj = {};
//   for (const pair of orderedArray) {
//     const [keyItem, valueItem] = pair;
//     sortedObj[keyItem] = valueItem;
//   }
//   // return sortedObj;
// }
// // const sortedObj = {};
// // for (const pair of orderedArray){
// //   const [keyItem, valueItem] = pair;
// //   sortedObj[keyItem] = valueItem;
// // }
// // console.log(sortedObj); // {You: You, and:and}
// // const sentenceObj[key] = you;

// // convert to object to array
// // Object.entries(myObject);

// convert array to object
// Object.fromEntries(myArray);



// const sentence = "You ? ,and me, .and me=and you.";

// console.log(sentence.replace("?,",""));
// sentence = sentence.replace("?", "");
// sentence = sentence.replace(",", "");
// sentence = sentence.replace(".", "");
// sentence = sentence.replace("=", "");

// console.log(countWords(sentence));
// const splitItem = //
// sentence = sentence.replace("/[^ws]/g", "");
// sentence = sentence.replaceAll("=", "");
// sentence = sentence.replaceAll(",", "");
// console.log(sentence.replace(/[^\w\s]/g, "")); //regex a-z,A-Z,0-9,underscore 


// console.log(arr[0].toLowerCase());
// console.log(arr[0][0]);