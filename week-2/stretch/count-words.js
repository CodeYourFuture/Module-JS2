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
  const cleanedStr = str.replace(/[.,?!]/g, '').toLowerCase();
  const arrayedStr = cleanedStr.split(' ');
  const setOfUnique = new Set(arrayedStr);

  const objectOfWords = {};
  const arrayOfKeyvalue=[];

  for (let item of setOfUnique) {
    
    if(item.length!=0){  //use this if statement to avoid counting and assigning white spaces
      const keyObject=item;
      const valueObject = arrayedStr.filter(word => word === item ).length; // this line checks and count for each words
      objectOfWords[keyObject] = valueObject; // assigning to the empty object 
      arrayOfKeyvalue.push([keyObject,valueObject]);
    }
    
    
  }

  const sortedKeyvalue=arrayOfKeyvalue.sort((a,b)=>a[1]-b[1]);
  const orderedObject={};
  for(let [key,value] of sortedKeyvalue){
    orderedObject[key]=value;

  }

  return orderedObject;
}

console.log(countWords("hello world! hELLo aGiaN? ? ?"));
console.log(countWords("you and I and You and me! ? "));
