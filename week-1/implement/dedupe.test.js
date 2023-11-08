const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

describe('dedupe', () => {
    it('removes duplicates from an array', () => {
      const inputArray = [1, 2, 2, 3, 4, 4, 5];
      const expectedResult = [1, 2, 3, 4, 5];
      expect(dedupe(inputArray)).toEqual(expectedResult);
    });
  
    it('handles an array with no duplicates', () => {
      const inputArray = [1, 2, 3, 4, 5];
      const expectedResult = [1, 2, 3, 4, 5];
      expect(dedupe(inputArray)).toEqual(expectedResult);
    });
  
    it('handles an empty array', () => {
      const inputArray = [];
      const expectedResult = [];
      expect(dedupe(inputArray)).toEqual(expectedResult);
    });
  });
  
   