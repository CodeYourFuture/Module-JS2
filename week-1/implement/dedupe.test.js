/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:
const dedupe = require("./dedupe.js");

//Describe function is used to group together related tests under a common heading or category.

describe("dedupe function", () => {
  test("given an empty array, it returns an empty array", () => {
    const emptyArray = [];
    expect(dedupe(emptyArray)).toEqual([]);
    //  This test checks if the function returns an empty array when an empty array is provided.
  });

  test("given an array with no duplicates, it returns a copy of the original array", () => {
    const noDuplicatesArray = ["a", "b", "c"];
    expect(dedupe(noDuplicatesArray)).toEqual(noDuplicatesArray);
    // This test checks if the function returns the original array when there are no duplicates.
  });

  test("given an array with duplicates, it removes the duplicate values", () => {
    const arrayWithDuplicates = [5, 1, 1, 2, 3, 2, 5, 8];
    const expectedOutput = [5, 1, 2, 3, 8];
    expect(dedupe(arrayWithDuplicates)).toEqual(expectedOutput);
    //  This test checks if the function removes duplicate values and returns the expected output.
  });
});

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
