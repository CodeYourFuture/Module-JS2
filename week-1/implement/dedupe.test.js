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
test("given an empty array, it returns an empty array", () => {
  const input = [];
  const expectedOutput = [];

  const result = dedupe(input);
  expect(result).toEqual(expectedOutput);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy of the original array", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [1, 2, 3, 4, 5];

  const result = dedupe(input);
  expect(result).toEqual(expectedOutput);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
test("given an array of strings with duplicates, it removes the duplicate values", () => {
  const input = ["a", "a", "b", "b", "c"];
  const expectedOutput = ["a", "b", "c"];

  const result = dedupe(input);
  expect(result).toEqual(expectedOutput);
});

test("given an array of numbers with duplicates, it removes the duplicate values", () => {
  const input = [5, 1, 1, 2, 3, 2, 5, 8];
  const expectedOutput = [5, 1, 2, 3, 8];

  const result = dedupe(input);
  expect(result).toEqual(expectedOutput);
});
