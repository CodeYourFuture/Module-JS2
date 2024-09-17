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
//test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

const deduped = require("./dedupe.js");

describe("deduped", () => {
  test("returns empty for empty array", () => {
    expect(deduped([])).toStrictEqual([]);
  });

  test("returns original array if no duplicates", () => {
    expect(deduped([6, 8, 5, 3])).toStrictEqual([6, 8, 5, 3]);
    expect(deduped(['c', 'b', 't', 'z'])).toStrictEqual(['c', 'b', 't', 'z']);
  });

  test("returns new array if duplicates", () => {
    expect(deduped([8, 7, 7, 8, 3, 5, 3])).toStrictEqual([8, 7, 3, 5]);
    expect(deduped(['a', 'c', 'a', 'h', 'c', 'd', 'd'])).toStrictEqual(['a', 'c', 'h', 'd']);
  });

})