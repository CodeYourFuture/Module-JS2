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
test("given an empty array, it returns an empty array", () => {
  const result = dedupe([]);
  expect(result).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, returns a copy of the original array", () => {
  const originalArray = ["a", "b", "c"];
  const result = dedupe(originalArray);
  expect(result).toEqual(originalArray);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
test("given an array with strings or numbers, removes the duplicate values", () => {
  const arrayWithDuplicates = [1, "a", "b", 1, "c", "b", 2];
  const result = dedupe(arrayWithDuplicates);
  expect(result).toEqual([1, "a", "b", "c", 2]);
});
