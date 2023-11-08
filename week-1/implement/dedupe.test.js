const dedupe = require("./dedupe");

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

test("given an empty array, returns an empty array", function () {
  expect(dedupe([])).toStrictEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

test("given an empty array, returns an empty array", function () {
  expect(dedupe(["marcus", "marcus", "hello", "hello", 2, 2, 29, 29])).toBe([
    "marcus",
    "hello",
    2,
    29,
  ]);
});
