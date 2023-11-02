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
// test.todo("given an empty array, it returns an empty array");
test("returns an empty array when given an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("returns a copy of the original array when given an array with no duplicates", () => {
  expect(dedupe([6, "a", 4, 3])).toEqual([6, "a", 4, 3]);
  expect(dedupe([12, "p", "s", 6])).toEqual([12, "p", "s", 6]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
test("removes duplicates values and return array of strings and numberw without duplicates", () => {
  expect(dedupe([4, 6, 2, 2, 0, 4, "a", 8, "a"])).toEqual([4, 6, 2, 0, "a", 8]);
  expect(dedupe([12, 0, "r", 3, "r", 0, 1, 1])).toEqual([12, 0, "r", 3, 1]);
});
