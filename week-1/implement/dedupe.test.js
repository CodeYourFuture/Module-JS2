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

test("given an empty array, it returns an empty array", () => {
  const myNewArr = dedupe([]);
  expect(myNewArr).toEqual([]);
});

test("given an array with no duplicate, it should return a copy of the original array", () => {
  const myNewArr = dedupe(["b", "g", "a", "c", "r", "t"]);
  expect(myNewArr).toEqual(["b", "g", "a", "c", "r", "t"]);
});

test("given an array with strings or numbers, it should remove the duplicate values", () => {
  const myNewArr = dedupe([5, 1, 1, 2, 3, 2, 5, 8]);
  expect(myNewArr).toEqual([5, 1, 2, 3, 8]);
});

test("given an array with strings or numbers, it should remove the duplicate values", () => {
  const myNewArr = dedupe(["b", "g", "a", "c", "r", "t", "c", "g"]);
  expect(myNewArr).toEqual(["b", "g", "a", "c", "r", "t"]);
});