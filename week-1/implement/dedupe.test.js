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

const dedupe = require("./dedupe.js");

test("given an empty array, it returns an empty array", () => {
  const input = [];
  const result = dedupe(input);
  expect(result).toEqual([]);
});

test("given an array with no duplicates, it returns a copy of the original array", () => {
  const input = [1, 2, 3, 4];
  const result = dedupe(input);
  expect(result).toEqual(input);
});

test("given an array with strings or numbers, it removes duplicate values", () => {
  const input1 = ['a', 'a', 'a', 'b', 'b', 'c'];
  const input2 = [5, 1, 1, 2, 3, 2, 5, 8];

  const result1 = dedupe(input1);
  const result2 = dedupe(input2);

  expect(result1).toEqual(['a', 'b', 'c']);
  expect(result2).toEqual([5, 1, 2, 3, 8]);
});
