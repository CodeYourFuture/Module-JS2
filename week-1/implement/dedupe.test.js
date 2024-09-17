
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

const dedupe = require("./dedupe");

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array



describe("dedupe", () => {
    test("given an empty array, it returns an empty array", () => {
      expect(dedupe([])).toEqual([]);;
    });

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test("given array with no duplicates, it return a copy of the original array", () => {
    expect(dedupe([3, 4])).toEqual([3, 4]);
  });

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

test("given array with strings or numbers, it should remove the duplicate values", () => {
    expect(dedupe([3, 3, 6, "er", "er", 4])).toEqual([3, 6,"er", 4]);
  });
  
});
