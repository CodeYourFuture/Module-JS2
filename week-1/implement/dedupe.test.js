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

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {});

  test("given an array no duplicates, then it should return a copy of the original array", () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
    expect(dedupe([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("given an array with strings or numbers, then it should remove the duplicate values", () => {
    expect(dedupe(a, a, b, b, 1, 1, 2, 2)).toEqual([a, b, 1, 2]);
    expect(dedupe([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(dedupe(["Carlos", "Carlos", "Maria", "Maria"])).toEqual([
      "Carlos",
      "Maria",
    ]);
  });
});
