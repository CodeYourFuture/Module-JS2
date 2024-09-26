const dedupe = require('./dedupe');

// ... your test cases here

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
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values


//ANSWER

  
  // Test Case 1: Given an empty array, it returns an empty array
  test("given an empty array, it returns an empty array", () => {
    const result = dedupe([]);
    expect(result).toEqual([]);
  });
  
  // Test Case 2: Given an array with no duplicates, it should return a copy of the original array
  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const inputArray = [1, 2, 3, 4];
    const result = dedupe(inputArray);
    expect(result).toEqual(inputArray);
  });
  
  // Test Case 3: Given an array with strings or numbers, it should remove the duplicate values
  test("given an array with strings or numbers, it removes the duplicate values", () => {
    const inputArray1 = ['a', 'a', 'a', 'b', 'b', 'c'];
    const expectedOutput1 = ['a', 'b', 'c'];
    const result1 = dedupe(inputArray1);
    expect(result1).toEqual(expectedOutput1);
  
    const inputArray2 = [5, 1, 1, 2, 3, 2, 5, 8];
    const expectedOutput2 = [5, 1, 2, 3, 8];
    const result2 = dedupe(inputArray2);
    expect(result2).toEqual(expectedOutput2);
  });